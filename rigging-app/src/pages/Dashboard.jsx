import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const [projects, setProjects] = useState([
        {
            id: 1,
            address: '1981 ambassador st Philadelphia, PA, 19115',
            company: 'Kelvan Group',
            startDate: '2025-08-01',
            endDate: '2025-09-15',
            towerType: 'Self Support',
            towerHeight: '127 ft',
            projectFor: 'Verizon',
            managingCompany: 'Kelvan Group',
            rigger: 'Yauheni Butko',
            pm: {
                name: 'Aliaksabdr Duaiosd',
                email: 'pm@example.com',
                phone: '1234567890',
                role: 'PM',
                company: 'Kelvan Group',
            },
            cm: {
                name: 'Asalam Maeuum',
                email: 'cm@example.com',
                phone: '0987654321',
                role: 'CM',
                company: 'Kelvan Group',
            },
            personnel: [
                {
                    name: 'Yauheni Butko',
                    role: 'Crew Lead',
                    company: 'Slu',
                },
                {
                    name: 'Aliaksandr Shubich',
                    role: 'Top Hand',
                    company: 'Slu',
                },
            ],
        },
    ]);

    return (
        <div className="p-8 text-white bg-[#0d1117] min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.siteAddress}</h3>
                    <p className="text-gray-400 text-sm">Company: {project.companyName}</p>
                    <p className="text-gray-400 text-sm">Tower: {project.towerType}, {project.towerHeight}</p>
                    <p className="text-gray-400 text-sm">Project For: {project.projectFor}</p>
                    <p className="text-gray-400 text-sm">Dates: {project.startDate} – {project.endDate}</p>

                    <div className="mt-4 text-sm text-white">
                        <strong>Rigging Plans:</strong>
                        {project.riggingPlans && project.riggingPlans.length > 0 ? (
                            <ul className="list-disc list-inside text-green-400 mt-2">
                                {project.riggingPlans.map((plan, i) => (
                                    <li key={i}>
                                        Config: {plan.config}, Gross Load: {plan.grossLoad} lbs, Tag Line Angle: {plan.tagAngle}°
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 italic">No rigging plans yet.</p>
                        )}
                    </div>

                    <button
                        onClick={() => navigate(`/rigging/${index}`)}
                        className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
                    >
                        Create Rigging Plan
                    </button>
                </div>
            ))}

        </div>
    );
};

export default Dashboard;
