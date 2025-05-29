// CreateProjectForm.jsx
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const CreateProjectForm = ({ onClose }) => {
    const { currentUser } = useAuth();

    const [form, setForm] = useState({
        address: '',
        company: '',
        rigger: '',
        startDate: '',
        endDate: '',
        pmName: '',
        pmEmail: '',
        pmPhone: '',
        cmName: '',
        cmEmail: '',
        cmPhone: '',
        managingCompany: '',
        towerHeight: '',
        projectFor: 'ATT',
        towerType: 'Monopole',
        towerOwner: '',
        userId: currentUser?.uid || ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'projects'), form);
            onClose();
        } catch (err) {
            console.error("Error adding document:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg space-y-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Create Project</h2>
            <input name="address" placeholder="Address (state, zip, street, coords)" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="company" placeholder="Company Name" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="rigger" placeholder="Competent Rigger" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input type="date" name="startDate" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input type="date" name="endDate" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="pmName" placeholder="PM Name" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="pmEmail" placeholder="PM Email" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="pmPhone" placeholder="PM Phone" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="cmName" placeholder="CM Name" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="cmEmail" placeholder="CM Email" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="cmPhone" placeholder="CM Phone" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="managingCompany" placeholder="Managing Company" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="towerHeight" placeholder="Tower Height (e.g. 120 ft)" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <select name="projectFor" onChange={handleChange} className="w-full p-2 rounded text-black">
                <option value="ATT">ATT</option>
                <option value="Verizon">Verizon</option>
                <option value="T-mobile">T-mobile</option>
            </select>
            <select name="towerType" onChange={handleChange} className="w-full p-2 rounded text-black">
                <option value="Monopole">Monopole</option>
                <option value="Self Support">Self Support</option>
                <option value="Guyed">Guyed</option>
                <option value="Untipicale">Untipicale</option>
            </select>
            <input name="towerOwner" placeholder="Tower Owner" onChange={handleChange} className="w-full p-2 rounded text-black" />
            <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Save Project</button>
        </form>
    );
};

export default CreateProjectForm;
