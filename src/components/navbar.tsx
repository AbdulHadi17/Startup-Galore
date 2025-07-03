import { auth } from '@root/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signIn, signOut } from '@root/auth'
import { BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
                  <Link href={'/startups/create'}>
                    <span className='max-sm:hidden'>Create</span>
                    <BadgePlus className='size-6 sm:hidden' />
                  </Link>

                  <form action={async () => {
                    'use server'
                    await signOut();
                  }}>
                    <button type='submit' className='flex items-center'>
                      <span className='max-sm:hidden'>LogOut</span>
                      <LogOut className='sm:hidden size-6 text-red-500 cursor-pointer' />
                    </button>
                  </form>

                  <Link href={`/users/${session?.id}`}>

                    <Avatar>
                      <AvatarImage src={session?.user?.image || "https://github.com/shadcn.png"} />
                      <AvatarFallback>{session?.user?.name}</AvatarFallback>
                    </Avatar>
                  </Link>
                </>)
                :
                (<>
                  <form action={async () => {
                    'use server'
                    await signIn();
                  }}>
                    <button className='hover:cursor-pointer' type='submit'>LogIn</button>
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
