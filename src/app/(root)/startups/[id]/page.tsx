import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'


const Page = async ({params}:{params:Promise<{id:string}>}) => {

  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY,{id});

  if(!post) return notFound();


  return (
    <div>
      This is the page of {id} and {post?.title}
    </div>
  )
}

export default Page
