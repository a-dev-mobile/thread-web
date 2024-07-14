import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!isShowPassword);
    }
    return (
        <div className='flex items-center  bg-transparent border-[1.5px] px-5 rounded mb-1 '>
            <input value={value}
                onChange={onChange}
                type={isShowPassword ? 'text' : 'password'}
                placeholder={placeholder || 'password'}
                className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
            />
            {isShowPassword ? (<FaRegEye
                size={22}
                className='text-primary cursor-pointer '
                onClick={() => toggleShowPassword()}
            />) : (<FaRegEyeSlash
                size={22}
                onClick={() => toggleShowPassword()}
                className='text-slate-400 cursor-pointer '
            />)
            }
        </div>
    )
}

PasswordInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default PasswordInput