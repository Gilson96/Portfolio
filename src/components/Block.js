import React from 'react'

const Block = ({ children, backgroundColor, extraStyle }) => {
    return (
        <div className={`w-full h-full flex flex-col justify-center items-center p-[2%] rounded-2xl ${backgroundColor} ${extraStyle}`}>
            {children}
        </div>
    )
}

export default Block