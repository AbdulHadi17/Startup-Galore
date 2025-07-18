import Link from 'next/link'
import React from 'react'
import { formatLocaleDateUS } from '@root/utils';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Author, Startup } from "@/sanity/types";
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

export type StartupCardType = Omit<Startup, "author"> & {author?:Author};

const StartupCard = ({post}:{post:StartupCardType}) => {

const {title,category,description,image,_id:_postId , views, _createdAt , author} = post;

  return (
    <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-[#EE2B69] transition-all duration-500 hover:shadow-300 hover:bg-[#FFE8F0]'>
    
    <div className='flex items-center justify-between'>
        <div className=''>
            <p className='font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full group-hover:bg-[#F7F7F7]'>{formatLocaleDateUS(_createdAt)}</p>
        </div>
        <div className='flex items-center gap-1'>
            <Eye/>
            <p className='font-medium'>{views}</p>
        </div>
    </div>

    <div className='mt-5 flex items-center justify-between'>

        <div className='flex-1'>
            <Link href={`/users/${author?._id}`}>
            <p className='line-clamp-1 font-medium text-[16px] text-black'>{author?.name}</p>
            </Link>
            <Link href={`/startups/${_postId}`}>
            <p className='font-semibold text-[26px] text-black line-clamp-1'>{title}</p>
            </Link>
        </div>
        <Link href={`/users/${author?._id}`}>
        <Image src={author?.image || 'https://placehold.co/60x60'} alt='profilePic' height={60} width={60} className='rounded-full'/>
        </Link>
    </div>

    <Link href={`/startups/${_postId}`}>
    <p className='font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>{description}</p>
    </Link>

    <Link href={`/startups/${_postId}`}>
    <img src={image} alt='startup image' className='w-full h-[164px] rounded-[10px] object-cover'></img>
    </Link>

    <div className='flex justify-between items-center mt-5'>
        <Link href={`/?query=${category?.toLowerCase()}`}>
        <p className='font-medium text-[16px] text-black'>{category}</p>
        </Link>

        <Button className='rounded-full  font-medium text-[16px] text-white px-5 py-3' asChild>
            <Link href={`/startups/${_postId}`}>
            Details
            </Link>
        </Button>
    </div>

    </li>
  )
}



export const StartupSkeleton = () => (
    <>
    {[0,1,2,3,4].map((i) => {
       return <li key={cn('skeleton',i)}>
        <Skeleton className='w-full h-96 rounded-[22px] bg-zinc-400'/>
       </li>;
    })}
    </>
)

export default StartupCard
