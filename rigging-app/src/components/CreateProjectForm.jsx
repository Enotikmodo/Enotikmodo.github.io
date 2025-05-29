import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const CreateProjectForm = ({ onProjectCreated, editingProject, setEditingProject, closeForm }) => {
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
    });

    useEffect(() => {
        if (editingProject) {
            setForm(editingProject);
        }
    }, [editingProject]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProject) {
                const docRef = doc(db, 'projects', editingProject.id);
                await updateDoc(docRef, form);
                setEditingProject(null);
            } else {
                await addDoc(collection(db, 'projects'), {
                    ...form,
                    userId: currentUser.uid,
                });
            }
            setForm({
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
            });
            onProjectCreated();
            closeForm(); // <== Close form on submit
        } catch (error) {
            console.error("Error saving project:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#111827] p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">
                {editingProject ? 'Edit Project' : 'Create Project'}
            </h2>

            <input name="address" value={form.address} onChange={handleChange} placeholder="Address (state, zip, street, coords)" className="w-full p-2 rounded text-black" />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className="w-full p-2 rounded text-black" />
            <input name="rigger" value={form.rigger} onChange={handleChange} placeholder="Competent Rigger" className="w-full p-2 rounded text-black" />
            <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="w-full p-2 rounded text-black" />
            <input name="pmName" value={form.pmName} onChange={handleChange} placeholder="PM Name" className="w-full p-2 rounded text-black" />
            <input name="pmEmail" value={form.pmEmail} onChange={handleChange} placeholder="PM Email" className="w-full p-2 rounded text-black" />
            <input name="pmPhone" value={form.pmPhone} onChange={handleChange} placeholder="PM Phone" className="w-full p-2 rounded text-black" />
            <input name="cmName" value={form.cmName} onChange={handleChange} placeholder="CM Name" className="w-full p-2 rounded text-black" />
            <input name="cmEmail" value={form.cmEmail} onChange={handleChange} placeholder="CM Email" className="w-full p-2 rounded text-black" />
            <input name="cmPhone" value={form.cmPhone} onChange={handleChange} placeholder="CM Phone" className="w-full p-2 rounded text-black" />
            <input name="managingCompany" value={form.managingCompany} onChange={handleChange} placeholder="Managing Company" className="w-full p-2 rounded text-black" />
            <input name="towerHeight" value={form.towerHeight} onChange={handleChange} placeholder="Tower Height (e.g. 120 ft)" className="w-full p-2 rounded text-black" />

            <select name="projectFor" value={form.projectFor} onChange={handleChange} className="w-full p-2 rounded text-black">
                <option value="ATT">ATT</option>
                <option value="Verizon">Verizon</option>
                <option value="T-Mobile">T-Mobile</option>
            </select>

            <select name="towerType" value={form.towerType} onChange={handleChange} className="w-full p-2 rounded text-black">
                <option value="Monopole">Monopole</option>
                <option value="Self Support">Self Support</option>
                <option value="Guyed">Guyed</option>
                <option value="Untipicale">Untipicale</option>
            </select>

            <input name="towerOwner" value={form.towerOwner} onChange={handleChange} placeholder="Tower Owner" className="w-full p-2 rounded text-black" />

            <div className="flex gap-4">
                <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">
                    Save Project
                </button>
                <button type="button" onClick={closeForm} className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition">
                    Cancel
                </button>
            </div>
        </form>
    );}

export default CreateProjectForm;
