import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const UserSettings = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        company: user?.company || '',
        role: user?.role || '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogout = () => {
        signOut(auth);
        navigate('/');
    };

    return (
        <div className="p-8 text-white bg-[#0d1117] min-h-screen">
            <h2 className="text-2xl font-bold mb-4">User Settings</h2>

            <div className="space-y-4 max-w-md">
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
                <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
                <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />
                <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Role"
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                />

                {/* Здесь можно добавить сохранение в Firebase Firestore в будущем */}

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserSettings;
export const useAuth = () => useContext(AuthContext);