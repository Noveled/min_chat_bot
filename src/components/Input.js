import React, { useState } from 'react'
import { CircleArrowUp } from 'lucide-react';
import { Paperclip } from 'lucide-react';


const Input = ({submitMessage}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        submitMessage(message);
        setMessage('');
    }

    return (
        <div className='fixed w-full bottom-0 bg-white z-10'>
            <div className='flex w-full mx-auto justify-center items-center  max-w-screen-md h-11 rounded-l-full rounded-r-full bg-neutral-200'>
                <form className='flex w-full mx-4 justify-between items-center' onSubmit={handleSubmit}>
                    <Paperclip />
                    <input
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message} 
                    className='w-full mx-2 bg-neutral-200'
                    type="text" placeholder='메시지 MinGPT' />
                    <button className='mx-0 my-0'><CircleArrowUp /></button>
                </form>
            </div>

            <p className='text-sm my-2 text-neutral-500 text-center'>MinGPT는 실수를 할 수 있습니다. 중요한 정보를 확인하세요.</p>
        </div>
  )
}

export default Input