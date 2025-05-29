// src/pages/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto text-white">
            <h2 className="text-xl mb-4">Login</h2>
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-yellow-500 text-black px-4 py-2 rounded">Login</button>
        </form>
    );
};

export default Login;
