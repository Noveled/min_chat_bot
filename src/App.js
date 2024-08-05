import './App.css';
import './Sidebar.css';
import Header from './components/Header';
import Chat from './components/Chat';
import Input from './components/Input';
import React, { useState } from 'react'
import { Bird } from 'lucide-react';
import {v4 as uuidv4} from 'uuid';

uuidv4();


function App() {
    const [messages, setMessages] = useState([]);
    const isTrue = false;

    const [isSideOpen, setIsSideOpen] = useState(false);
    const toggleSidebar = () => {
      console.log("isSideOpen : ", isSideOpen);
      setIsSideOpen(!isSideOpen);
    };

    const submitMessage = (message) => {
        setMessages(
            [...messages, { id: uuidv4(), context: message, isUser: true, isEdit: false }]
        );
    }

  

    return (
      <div className='container'>
        <div className={`sidebar ${isSideOpen ? 'open' : ''}`}>
          <div className="sidebar-content text-neutral-500">
            <div className='flex justify-between mb-2 hover:bg-slate-200'>
              <div className='flex gap-2'>
              <div className='border w-7 h-7 rounded-full'>
                <Bird className='w-6 h-6 p-1'/>
              </div>
              <p>MinGPT</p>
              </div>
            </div>
            <div className='flex justify-between mb-2 hover:bg-slate-200'>
              <div className='flex gap-2'>
              <div className='border w-7 h-7 rounded-full'>
                <Bird className='w-6 h-6 p-1'/>
              </div>
              <p>챗GPT</p>
              </div>
            </div>
            <div className='flex justify-between mb-2 hover:bg-slate-200'>
              <div className='flex gap-2'>
              <div className='border w-7 h-7 rounded-full'>
                <Bird className='w-6 h-6 p-1'/>
              </div>
              <p>GPT 탐색</p>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className={`main-content ${isSideOpen ? 'shift' : ''}`}>
          <Header toggleSidebar={toggleSidebar}/>
          <Chat messages={messages} isTrue={isTrue} />
          <Input submitMessage={submitMessage} />
        </div>
    </div>
  );
}

export default App;
