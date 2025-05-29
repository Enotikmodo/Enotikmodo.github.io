import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RiggingPlan = () => {
    const { projectId } = useParams();

    const [form, setForm] = useState({
        class: '',
        configuration: '',
        riggingType: '',
        heelBlock: false,
        equipment: {
            sling: 'LiftAll ENR3 Yellow – 16800 lb',
            block: 'Rock Exotica Omni-Block – 4500 lb',
            capstan: 'AB Chance – 1000 lb',
            rope: 'WestFall Pro Load Line – 11000 lb',
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Rigging Plan:', form);
        alert('Rigging Plan submitted. Check console for data.');
    };

    return (
        <div className="p-8 text-white bg-[#0d1117] min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Create Rigging Plan (Project #{projectId})</h1>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">

                <div>
                    <label className="block mb-2">Construction Class</label>
                    <select name="class" value={form.class} onChange={handleChange} className="w-full p-2 rounded text-black">
                        <option value="">-- Select Class --</option>
                        <option value="II">Class II (&gt500 lb)</option>
                        <option value="III">Class III (&gt2000 lb)</option>
                        <option value="IV">Class IV (&gt2000 lb)</option>
                        <option value="IV (Redundant)">Class IV with Redundant (No Engineer)</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2">Rigging Configuration</label>
                    <select name="configuration" value={form.configuration} onChange={handleChange} className="w-full p-2 rounded text-black">
                        <option value="">-- Select --</option>
                        <option value="1-part">Top Block Only – 1 Part</option>
                        <option value="2-part">Top & Heel Block – 2 Part</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2">Tag Line Type</label>
                    <select name="riggingType" value={form.riggingType} onChange={handleChange} className="w-full p-2 rounded text-black">
                        <option value="">-- Select --</option>
                        <option value="crew">Crew Controlled Tag</option>
                        <option value="self">Self Tag</option>
                        <option value="trolley">Trolley Tag</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" name="heelBlock" checked={form.heelBlock} onChange={handleChange} />
                    <label>Include Heel Block</label>
                </div>

                <div>
                    <h2 className="font-semibold mb-2">Equipment (WLL):</h2>
                    <ul className="list-disc pl-6 text-gray-300">
                        <li>{form.equipment.sling}</li>
                        <li>{form.equipment.block}</li>
                        <li>{form.equipment.capstan}</li>
                        <li>{form.equipment.rope}</li>
                    </ul>
                </div>

                <button type="submit" className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition">
                    Submit Plan
                </button>
            </form>
        </div>
    );
};

export default RiggingPlan;
