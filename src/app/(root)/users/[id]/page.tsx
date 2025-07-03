import { StartupSkeleton } from '@/components/StartupCard';
import UserStartups from '@/components/userStartups';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import { auth } from '@root/auth'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'

const page = async ({ params }: { params: { id: string } }) => {

  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();


  return (
    <>
      <section className='w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10'>

        <div className='w-80 px-6 pb-6 pt-20 flex flex-col justify-center items-center bg-[#EE2B69] border-[5px] border-black shadow-100 rounded-[30px] relative z-0 h-fit max-lg:w-full'>
          <div className='w-11/12 bg-white border-[5px] border-black rounded-[20px] px-5 py-3 absolute -top-9 after:absolute  after:-top-1 after:right-0 after:-skew-y-6 after:bg-black after:-z-[1] after:rounded-[20px] after:w-full after:h-[60px] before:absolute before:-bottom-1 before:left-0  before:-skew-y-6 before:w-full before:h-[60px] before:bg-black  before:-z-[1] before:rounded-[20px] shadow-100'>
            <h3 className='text-[24px] font-black text-black uppercase text-center line-clamp-1'>
              {user?.name}
            </h3>
          </div>

          <Image
            src={user?.image || '/default-user.png'} // fallback image in public folder
            alt={user?.name || 'User'}
            height={220}
            width={220}
            className='rounded-full object-cover border-[3px] border-black shadow-100'
          />

          <p className='font-semibold text-center text-[30px] text-white mt-7 line-clamp-1'>@{user?.username}</p>

          <p className='text-[16px] font-medium text-white mt-3 text-center line-clamp-2'>
            {user?.bio || 'No bio available'}
          </p>


        </div>

        <div className='flex-1 flex flex-col gap-5 lg:-mt-5'>
          <p className='text-[30px] font-bold text-black'>
            {session?.id === id ? 'Your' : 'All'} Startups:
          </p>

          <ul className='grid sm:grid-cols-2 gap-5 '>
                <Suspense fallback={<StartupSkeleton/>}>
                <UserStartups id={id} />
                </Suspense>
          </ul>

        </div>

      </section>
    </>
  )
}

export default page
