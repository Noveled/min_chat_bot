import React from 'react'
import { PanelLeft } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className='flex justify-between items-center h-8 text-neutral-500'>
        <div className='flex gap-4 items-center'>
            <PanelLeft />
            <SquarePen />
            <div className='flex ml-2 items-center'><span className='text-lg font-bold'>MinGPT</span><ChevronDown className='text-neutral-400' /></div>
        </div>
        <div className='w-8 h-8'>
            <img className='rounded-full'
            src={require("../images/base.png")}></img>
        </div>
    </div>
  )
}

export default Header