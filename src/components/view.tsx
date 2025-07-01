import React from 'react'
import Ping from './ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'
import { after} from 'next/server';

const View = async ({id}:{id:string}) => {

  const result = await client
  .withConfig({ useCdn: false })
  .fetch(STARTUP_VIEWS_QUERY, { id });

  const totalViews = result?.views ?? 0;

  
  after(async ()=> await writeClient.patch(id).set({views: totalViews+1}).commit()
)
  
  return (
    <div className='flex justify-end items-center mt-5 fixed bottom-3 right-3'>
      <div className='absolute -top-2 -right-2'>
            <Ping/>
      </div>
      <div className='font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-lg capitalize'><span className='font-black'>Views: {totalViews}</span></div>
    </div>
  )
}

export default View
