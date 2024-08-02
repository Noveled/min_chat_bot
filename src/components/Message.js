import React from 'react'
import { Bird, Volume2, Copy, RefreshCw, ThumbsDown, Sparkles } from 'lucide-react';

const Message = ({context}) => {
    // console.log({context});
    return (
        <div className='w-full'>
            <div className="flex justify-end my-4">
                <span>
                    <p className='inline-block bg-neutral-200
                    rounded-md p-2'>{context.context}</p>
                </span>
            </div>
            <div className='flex gap-4'>
                <div className='border w-9 h-9 rounded-full'>
                    <Bird className='w-8 h-8 p-1'/>
                </div>
                <div>
                    <span className='text-left'><p>{context.context.split("").reverse().join("")}</p></span>
                    <div className='flex gap-2 my-1 text-neutral-500'>
                        <Volume2 className='w-4' />
                        <Copy className='w-4' />
                        <RefreshCw className='w-4' />
                        <ThumbsDown className='w-4' />
                        <Sparkles className='w-4' />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Message