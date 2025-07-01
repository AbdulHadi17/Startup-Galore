import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { formatLocaleDateUS } from '@root/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import markdownit from 'markdown-it'
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/view';
import { auth } from '@root/auth';

const md = markdownit();

const Page = async ({params}:{params:Promise<{id:string}>}) => {


  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY,{id});

  if(!post) return notFound();

  const parsedContent = md.render(post.pitch || '');


  return (
    <>
    
    <section className=' w-full bg-[#EE2B69] min-h-[230px] pattern flex justify-center items-center flex-col py-10 px-6'>

      <span className='bg-[#FBE843] px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri'>{formatLocaleDateUS(post._createdAt)}</span>

      <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 '>{post?.title}</h1>

      <p className='font-medium text-[20px] text-white max-w-5xl text-center break-words'>
        {post.description}</p>


    </section>

    <section className=' px-6 py-10 max-w-7xl mx-auto'>

    <div className='myimage'>
      <img src={post.image} className='w-full rounded-xl h-auto' alt='thumbnail' />
    </div>

      <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
      <div className='flex justify-between items-center gap-5'>
        <Link href={`/users/${post.author._id}`} className='flex gap-4 items-center mb-3'>
          <Image src={post.author.image} width={64} height={64} className='rounded-full object-cover' alt='author' />
          <div>
            <p className='font-medium text-[20px] text-black'>{post.author.name}</p>
            <p className=' font-medium text-[16px] text-[#7D8087]'>@{post.author.username}</p>
          </div>
        </Link>

        <div className='categoryclass font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full'>
          <span className=''>{post.category}</span>
      </div>
      </div>

          <h3 className='text-[30px] font-bold text-black'>Pitch Details</h3>
          {
            parsedContent? <>
              <article 
              className='prose max-w-4xl font-work-sans break-all'
              dangerouslySetInnerHTML={{__html:parsedContent}}/>
            </>
            : <>
            <div className='text-black-100 text-sm font-normal'>No Results</div>
            </>
          }

      </div>
      <hr className=' border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto'></hr>

      <Suspense fallback={<Skeleton className='bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3'/>}>
            <View id={id}/>
      </Suspense>
      
    </section>
    </>
  )
}

export default Page
