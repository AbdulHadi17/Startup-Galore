import React from 'react'
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';

const Searchbar = ({query}:{query?:string}) => {

  // const query ='this is a query';


  return (
    <Form action={'/'} scroll={false} className='search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5'>

<input className='flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none'
name='query'
placeholder='Search Startups'
type='text'
value={query}
/>

<div className='flex gap-1'>

{query && (<>
<SearchFormReset/></>)}

<button type='submit' className='size-[50px] rounded-full bg-black flex justify-center items-center !important text-white hover:cursor-pointer'>
  S
</button>

</div>

    </Form>
  )
}

export default Searchbar
