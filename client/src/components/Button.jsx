import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='m-4 py-1 px-8 border-white rounded-full hover:bg-white hover:text-primary'>{ children }</button>
    )
}

export default Button