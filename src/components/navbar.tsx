import { auth } from '@root/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signIn,signOut } from '@root/auth'

const Navbar = async () => {

const session = await auth();
// console.log(session);
  return (
    <>
    <header className='px-5 py-3 bg-primary-100 text-black bg-white'>
        <nav className='flex justify-between items-center'>
<Link href={'/'}>
<Image src="/logo.png" width={144} height={36} alt="logo" />
</Link>

<div className='flex items-center gap-3 font-work-sans font-medium'>
  {
    session && session?.user ? 
    (<>
    <Link href={'/startup/create'}>
    <span>Create</span>
    </Link>

    <form action={async ()=>{ 
    'use server'
    await signOut();
    }}> 
      <button type='submit'>LogOut</button>
    </form>

    <Link href={`/user/${session?.user?.id}`}>
    <span>{session?.user?.name}</span>
    </Link>
    </>)
    :
    (<>
    <form action={async ()=>{
      'use server'
      await signIn();
    }}>
      <button className='' type='submit'>LogIn</button>
    </form>
    </>)
  }
</div>

        </nav>
    </header>
    </>
  )
}

export default Navbar
