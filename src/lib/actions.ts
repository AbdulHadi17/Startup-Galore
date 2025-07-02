'use server'

import { writeClient } from "@/sanity/lib/write-client";
import { auth } from "@root/auth"
import { paresdServerActionsTemplate } from "@root/utils";
import slugify from 'slugify'


export const createPitch = async(
    state : any,
    form : FormData,
    pitch : string
 ) =>{

const session = await auth();

if(!session){
    return paresdServerActionsTemplate({
        error: 'not signed in',
        status: 'ERROR'
    })
}

const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch"),
  );

  const slug = slugify(title as string , {lower:true , strict:true});

  try {
   
    const startup = {
        title,
        description,
        category,
        image: link,
        slug: {
            _type: slug,
            current: slug
        },
        author: {
            _type: 'reference',
            _ref: session?.id
        },
        pitch
    }

    const result = await writeClient.create({
        _type:'startup',
        ...startup
    })

    return paresdServerActionsTemplate({
        ...result,
        error: '',
        status: 'SUCCESS'
    })

  } catch (error) {
    
    console.log(error);

    return paresdServerActionsTemplate({
        error: JSON.stringify(error),
        status:'ERROR'
    })
  }


}