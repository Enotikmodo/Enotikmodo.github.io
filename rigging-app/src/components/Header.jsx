import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <header className="bg-[#0d1117] text-white px-6 py-4 flex justify-between items-center shadow-md">
            <Link to="/" className="text-xl font-bold">TowerRig</Link>
            <nav className="space-x-6">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                {currentUser ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout} className="text-red-400 hover:text-red-600">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
