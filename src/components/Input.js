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
        <div>
            <div className='flex items-center w-11/12 h-11 mx-auto rounded-l-full rounded-r-full bg-slate-600'>
                <form className='flex w-full mx-4 justify-between items-center' onSubmit={handleSubmit}>
                    <Paperclip />
                    <input onChange={(e)=>setMessage(e.target.value)}
                    value={message} 
                    className='w-full mx-2 bg-slate-600'
                    type="text" placeholder='메시지 MinGPT' />
                    <button className='mx-0 my-0'><CircleArrowUp /></button>
                </form>
            </div>

            <p className='text-sm my-2 text-neutral-500 text-center'>ChatGPT는 실수를 할 수 있습니다. 중요한 정보를 확인하세요.</p>
        </div>
  )
}

export default Input