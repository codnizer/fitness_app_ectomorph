// src/Login.js
import React, { useState } from 'react';
import { login } from '../services/authService.js';
import { useNavigate } from 'react-router-dom';
import logingif from '../assets/logingif.gif'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/profile')
        } catch (error) {
            alert('Error logging in: ' + error.message);
        }
    };

    return (

        <>
       <div className='flex flex-col gap-20 justify-around bg-slate-200 p-8 rounded-2xl shadow-md max-w-md mx-auto'>
    <div>
        <h2 className='cairo-bold text-2xl text-center text-gray-800 py-4'>Sign in using your Email</h2>
        <img src={logingif} className='h-[200px] mx-auto p-4 rounded-full'  alt="" />
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 text-white opacity-70">
                    <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow cairo-medium text-white placeholder-white" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 text-white opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                </svg>
                <input type="password" className="grow cairo-medium text-white placeholder-white" placeholder='Password' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </label>
            <button className='btn btn-success cairo-bold text-xl text-black hover:bg-blue-600 transition-colors duration-200' type="submit">Login</button>
        </form>
    </div>
</div>

        </>
    );
};

export default Login;
