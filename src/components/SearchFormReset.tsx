"use client"

import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {


    const reset = ()=>{
        let form = document.querySelector('search-form') as HTMLFormElement;
      
        if (form) form.reset();
    }

  return (
<>
<button className='size-[50px] rounded-full bg-black flex justify-center items-center !important' type='reset' onClick={reset}>
<Link className='text-white' href={'/'}>
<X/>
</Link>

</button>
</>
  )


}

export default SearchFormReset
