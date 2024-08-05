import React from 'react'
import { Bird, Volume2, Copy, RefreshCw, ThumbsDown, Sparkles } from 'lucide-react';
import Tooltip from './Tooltip';

const Message = ({context}) => {
    const setComponentStyle = {width: '16px'}
    const myFunc = () => {
        alert('새 채팅 불러오는 이벤트');
      }

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
                        <Tooltip component={Volume2} toolTipText="소리 듣기" callBackFunc={myFunc} setStyle={setComponentStyle}/>
                        <Tooltip component={Copy} toolTipText="복사" callBackFunc={myFunc} setStyle={setComponentStyle}/>
                        <Tooltip component={RefreshCw} toolTipText="응답 다시 생성하기" callBackFunc={myFunc} setStyle={setComponentStyle}/>
                        <Tooltip component={ThumbsDown} toolTipText="별로인 응답" callBackFunc={myFunc} setStyle={setComponentStyle}/>
                        <Tooltip component={Sparkles} toolTipText="모델 변경" callBackFunc={myFunc} setStyle={setComponentStyle}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Message