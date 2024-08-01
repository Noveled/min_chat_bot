import React from 'react'


const Message = ({context}) => {
    // console.log({context});
    return (
        <div className='mx-16 my-8'>
            <div>
                <p className='text-right bg-red-200'>{context.context}</p>
            </div>
            <div >
                <p className='text-left bg-orange-200'>{context.context.split("").reverse().join("")}</p>
            </div>
        </div>
        
    )
}

export default Message