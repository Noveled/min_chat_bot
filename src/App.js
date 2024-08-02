import './App.css';
import Header from './components/Header';
import Chat from './components/Chat';
import Input from './components/Input';
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import Tooltip from './components/Tooltip';
import { PanelLeft } from 'lucide-react';

uuidv4();


function App() {
  const [messages, setMessages] = useState([]);
    const isTrue = false;

    const submitMessage = (message) => {
        setMessages(
            [...messages, { id: uuidv4(), context: message, isUser: true, isEdit: false }]
        );
    }

    

    return (
    <div>
      <Header />
      <Chat messages={messages} isTrue={isTrue} />
      <Input submitMessage={submitMessage} />
    </div>
  );
}

export default App;
