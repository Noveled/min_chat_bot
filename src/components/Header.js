import React, { useState, useEffect, useRef } from 'react'
import { PanelLeft, SquarePen, ChevronDown, Flame, Atom, CircleCheck, MessageCircleDashed } from 'lucide-react';
import Tooltip from './Tooltip';
import './Header.css';


const Header = ({toggleSidebar}) => {
  const [showPanelLeft, setShowPanelLeft] = useState(false);
  const [showGptBox, setShowGptBox] = useState(false);
  const [showProfileBox, setShowProfileBox] = useState(false);

  const showProfileRef = useRef(null);
  const showGptBoxRef = useRef(null);

  const handleClickOutside = (event) => {
    if (showGptBoxRef.current && !showGptBoxRef.current.contains(event.target)) {
      setShowGptBox(false);
    }

    if (showProfileRef.current && !showProfileRef.current.contains(event.target)) {
      setShowProfileBox(false);
    }

  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const myFunc = () => {
    alert('새 채팅 불러오는 이벤트');
  }

  return (
    <div className='fixed w-full top-0 bg-white p-4 z-10'>
      <div className='flex justify-between items-center text-neutral-500'> 
          <div className='flex gap-4 items-center'>
              <PanelLeft onClick={toggleSidebar}
              onMouseEnter={() => setShowPanelLeft(true)} onMouseLeave={() => setShowPanelLeft(false)}
              className='.tooltip-container'/>
              {showPanelLeft && (
                <div className="panel-left-tooltip">
                  사이드바 열기
                </div>
              )}
              {/* <SquarePen /> */}
              <Tooltip component={SquarePen} toolTipText="새 채팅" callBackFunc={myFunc}/>
              <div onClick={() => setShowGptBox(!showGptBox)}
              className='flex ml-2 items-center'><span className='text-lg font-bold' ref={showGptBoxRef} >MinGPT</span><ChevronDown className='text-neutral-400 ml-1 w-4' /></div>
              {showGptBox && (
                <div className='border p-3 absolute rounded-lg top-16 bg-white'>
                  <div className='flex justify-between hover:bg-slate-200'>
                    <div className='flex gap-2'>
                    <div className='border w-7 h-7 rounded-full'>
                      <Flame className='w-6 h-6 p-1'/>
                    </div>
                    <p>MinGPT Plus<br /><span className='text-sm'>가장 스마트한 모델,<br /> 그리고 더 많은 기능</span></p>
                    </div>
                    <span className='text-sm w-fit h-fit border p-1 rounded-full'>업그레이드</span>
                  </div>
                  <div className='flex justify-between hover:bg-slate-200'>
                    <div className='flex gap-2'>
                    <div className='border w-7 h-7 rounded-full'>
                      <Atom  className='w-6 h-6 p-1'/>
                    </div>
                    <p>MinGPT<br /><span className='text-sm'>일상적인 작업에 적합</span></p>
                    </div>
                    <CircleCheck />
                  </div>
                  <hr className='my-2'/>
                  <div className='flex justify-between hover:bg-slate-200'>
                    <div className='flex gap-2'>
                    <div className='border w-7 h-7 rounded-full'>
                      <MessageCircleDashed className='w-6 h-6 p-1'/>
                    </div>
                    <p>임시 채팅</p>
                    </div>
                  </div>
                </div>
              )}
          </div>
          <div onClick={() => setShowProfileBox(!showProfileBox)}
          className='flex justify-center items-center border w-9 h-9 rounded-full'
          ref={showProfileRef}>
              <img className='rounded-full'
              src={require("../images/original_1.png")}></img>
          </div>
          {showProfileBox && (
                <div className='border p-3 absolute rounded-lg right-5 top-16 bg-white'>
                  <div className='flex-col'>
                    <div className='flex gap-2 my-1 hover:bg-slate-200'>
                      <div className='border w-7 h-7 rounded-full'>
                        <Flame className='w-6 h-6 p-1'/>
                      </div>
                      <p>내 GPT</p>
                    </div>
                    <div className='flex gap-2 my-1 hover:bg-slate-200'>
                      <div className='border w-7 h-7 rounded-full'>
                        <Flame className='w-6 h-6 p-1'/>
                      </div>
                      <p>MinGPT 맞춤 설정</p>
                    </div>
                    <div className='flex gap-2 my-1 hover:bg-slate-200'>
                      <div className='border w-7 h-7 rounded-full'>
                        <Flame className='w-6 h-6 p-1'/>
                      </div>
                      <p>설정</p>
                    </div>
                    <hr />
                    <div className='flex gap-2 my-1 hover:bg-slate-200'>
                      <div className='border w-7 h-7 rounded-full'>
                        <Flame className='w-6 h-6 p-1'/>
                      </div>
                      <p>로그아웃</p>
                    </div>
                  </div>
                </div>
              )}
          
      </div>
    </div>
  )
}

export default Header