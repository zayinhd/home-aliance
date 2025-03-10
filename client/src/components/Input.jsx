import React from 'react'

const Input = ({ type, name, value, onChange, placeholder }) => {
    return (
        <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            className='p-2 bg-transparent border border-white text-primary'
            placeholder={ placeholder }
        >Input</input>
    )
}

export default Input