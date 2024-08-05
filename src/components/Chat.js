import React from 'react'
import { Bird, ShoppingBasket, ListChecks, GraduationCap, Signpost } from 'lucide-react';
import Message from './Message';

const Chat = ({messages}) => {
    // console.log(messages);
    return (
        <div className='sticky w-full h-lvh'>
            <div className='w-full h-full'>
                {messages.length === 0
                ?
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <Bird className='text-neutral-600 w-20 h-20 p-2 mb-8'/>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <div className='flex gap-2'>
                        <div className='border rounded-2xl w-40 h-24 text-neutral-500 text-sm'>
                            <ShoppingBasket className='m-2 w-5'/>
                            <p className='m-2'>
                                카메라에 잘 받는 옷 고르기
                            </p>
                        </div>
                        <div className='border rounded-2xl w-40 h-24 text-neutral-500 text-sm'>
                            <ListChecks className='m-2 w-5'/>
                            <p className='m-2'>
                                TikTok용 콘텐츠 캘린더
                            </p>
                        </div>
                        </div>
                        <div className='flex gap-2'>
                        <div className='border rounded-2xl w-40 h-24 text-neutral-500 text-sm'>
                            <GraduationCap className='m-2 w-5'/>
                            <p className='m-2'>
                            유치원생에게 '노스텔지어' 설명하기
                            </p>
                        </div>
                        <div className='border rounded-2xl w-40 h-24 text-neutral-500 text-sm'>
                            <Signpost className='m-2 w-5'/>
                            <p className='m-2'>
                                로마 제국 토막 상식
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                :
                <div className='max-w-screen-md mx-auto'>
                    {messages.map((msg)=>(
                        <Message key={msg.id} context={msg}/>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default Chat