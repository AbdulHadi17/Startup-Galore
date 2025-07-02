'use client'

import React, { useActionState, useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MarkdownEditor from '@uiw/react-markdown-editor';
import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { formSchema } from '@/lib/validation'
import {z} from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const StartupForm = () => {
  
const [errors,setErrors] = useState<Record<string,string>>({})
const [pitch, setpitch] = useState('');
const router = useRouter();


const handleFormSubmit = async (prevState: any ,formData:FormData)=>{

    try {
        const formValues = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            category: formData.get('category') as string,
            link: formData.get('link') as string,
            pitch
        }

        await formSchema.parseAsync(formValues);


        console.log(formValues);
        // const results = await createIdea(prevState , formData , pitch);

        // console.log(results);

        // if(results.status==='SUCCESS'){
        //     toast.error('Success', {
        //         description: 'Startup Created Successfully',
        //       });

        //       router.push(`/startups/${results.id}`);
        // }

        // return results;

    } catch (error) {
        
            if(error instanceof z.ZodError){
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string,string>);
            
                toast.error('Error', {
                    description: 'Validation Failed.',
                    classNames: {
                      toast: 'destructive', 
                    },
                  });


            return {...prevState, error:'Validation Failed',  status: 'ERROR'};
            }


            toast.error('Error', {
                description: 'An unexpected error has occured.',
                classNames: {
                  toast: 'destructive', 
                },
              });
            
            return {...prevState, error:'An unexpected error has occured',  status: 'ERROR'};

    }

}

const [state , formAction , isPending] = useActionState(handleFormSubmit,{
    errors:'',
    status: "INITIAL"
})

    return (
    <form action={formAction} className='max-w-2xl mx-auto bg-white my-10 space-y-8 px-6'>

        <div>
        <Label htmlFor='title' className='font-bold text-[18px] text-black uppercase'>
            Title :
        </Label>
        <Input required id='title' name='title' placeholder={'Title'} className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-[#7D8087]'
        />

        {errors?.title && <p className=' text-red-500 mt-2 ml-5'>{errors?.title}</p>}

        </div>

        <div>
        <Label htmlFor='description' className='font-bold text-[18px] text-black uppercase '>
        Description :
        </Label>
        <Textarea required id='description' name='description' placeholder={'Startup Description'} className='border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-[#7D8087] min-h-[120px]'
        />

        {errors?.description && <p className=' text-red-500 mt-2 ml-5'>{errors?.description}</p>}

        </div>

        <div>
        <Label htmlFor='category' className='font-bold text-[18px] text-black uppercase'>
            Category :
        </Label>
        <Input required id='category' name='category' placeholder={'Write Category (Music, Food , Education ...)'} className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-[#7D8087]'
        />

        {errors?.category && <p className=' text-red-500 mt-2 ml-5'>{errors?.category}</p>}

        </div>

        <div>
        <Label htmlFor='link' className='font-bold text-[18px] text-black uppercase'>
            Image URL :
        </Label>
        <Input required id='link' name='link' placeholder={'Paste Image URL'} className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-[#7D8087]'
        />

        {errors?.link && <p className=' text-red-500 mt-2 ml-5'>{errors?.link}</p>}

        </div>

        
        <div data-color-mode='light'>
        <Label htmlFor='pitch' className='font-bold text-[18px] text-black uppercase'>
            Pitch :
        </Label>

        <MarkdownEditor
        value={pitch}
        height="200px"
        id='pitch'
        style={{borderRadius: 20 , overflow: 'hidden'}}
        placeholder={'Briefly describe your idea and what problem does it solves.'}
        editable
        onChange={(value) => setpitch(value as string)}
    />
        
        {errors?.pitch && <p className=' text-red-500 mt-2 ml-5'>{errors?.pitch}</p>}

        </div>

        <Button className='text-white bg-[#EE2B69] border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px]' type='submit' disabled={isPending}>
                {isPending?'Submitting....':'Submit'}
                <Send className='size-6 ml-2'/>
        </Button>

    </form>
  )
}

export default StartupForm
