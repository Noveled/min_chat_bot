import React, { useEffect, useState } from 'react'
import { Github } from 'lucide-react';
import Input from './Input';
import Message from './Message';
import {v4 as uuidv4} from 'uuid';
uuidv4();

const Chat = ({context}) => {
    const [messages, setMessages] = useState([]);
    const isTrue = false;

    const submitMessage = (message) => {
        setMessages(
            [...messages, { id: uuidv4(), context: message, isUser: true, isEdit: false }]
        );
    }

    // console.log(messages);

    return (
        <div className='h-100'>
            {isTrue
            ?
            <div>
                <Github />
                <ul>
                    <li>정보1</li>
                    <li>정보2</li>
                    <li>정보3</li>
                    <li>정보4</li>
                </ul>
            </div>
            :
            <div>
                {messages.map((msg)=>(
                    <Message key={msg.id} context={msg}/>
                ))}
            </div>
            }
            <Input submitMessage={submitMessage} />
        </div>
    )
}

export default Chat