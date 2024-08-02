import React, { useState } from 'react'
import { PanelLeft } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Tooltip from './Tooltip';
import './Header.css';


const Header = () => {
  const [showPanelLeft, setShowPanelLeft] = useState(false);

  const myFunc = () => {
    alert('새 채팅 불러오는 이벤트');
  }

  return (
    <div className='fixed w-full top-0 bg-white p-4 z-10'>
      <div className='flex justify-between items-center text-neutral-500'> 
          <div className='flex gap-4 items-center'>
              <PanelLeft onMouseEnter={() => setShowPanelLeft(true)} onMouseLeave={() => setShowPanelLeft(false)}
              className='.tooltip-container'/>
              {showPanelLeft && (
                <div className="panel-left-tooltip">
                  사이드바 열기
                </div>
              )}
              {/* <SquarePen /> */}
              <Tooltip component={SquarePen} toolTipText="새 채팅" callBackFunc={myFunc}/>
              <div className='flex ml-2 items-center'><span className='text-lg font-bold'>MinGPT</span><ChevronDown className='text-neutral-400 ml-1 w-4' /></div>
          </div>
          <div className='flex justify-center items-center border w-9 h-9 rounded-full'>
              <img className='rounded-full'
              src={require("../images/original_1.png")}></img>
          </div>
      </div>
    </div>

    
  )
}

export default Header