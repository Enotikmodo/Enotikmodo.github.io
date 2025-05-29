import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import CreateProjectForm from '../components/CreateProjectForm';

const Dashboard = () => {
    const { currentUser } = useAuth();
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const fetchProjects = async () => {
        if (!currentUser) return;
        const q = query(collection(db, 'projects'), where('userId', '==', currentUser.uid));
        const snapshot = await getDocs(q);
        const projectList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(projectList);
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'projects', id));
        fetchProjects();
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
        setShowForm(true);
    };

    const handleCreateProject = () => {
        setEditingProject(null);
        setShowForm((prev) => !prev);
    };

    useEffect(() => {
        fetchProjects();
    }, [currentUser]);

    return (
        <div className="bg-[#0d1117] text-white min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>

            <div className="flex gap-4 mb-6">
                <button
                    onClick={handleCreateProject}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    + Create Project
                </button>
                <button className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600 transition">📁 Rope Logs</button>
                <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition">📄 Certificates</button>
            </div>

            {showForm && (
                <div className="mb-6">
                    <CreateProjectForm
                        onProjectCreated={fetchProjects}
                        editingProject={editingProject}
                        setEditingProject={setEditingProject}
                        closeForm={() => setShowForm(false)}
                    />
                </div>
            )}

            {projects.map((project) => (
                <div key={project.id} className="bg-[#111827] p-6 rounded-lg shadow-md mb-6">
                    <p><strong>Address:</strong> {project.address}</p>
                    <p><strong>Company:</strong> {project.company}</p>
                    <p><strong>Rigger:</strong> {project.rigger}</p>
                    <p><strong>PM:</strong> {project.pmName} ({project.pmEmail}, {project.pmPhone})</p>
                    <p><strong>CM:</strong> {project.cmName} ({project.cmEmail}, {project.cmPhone})</p>
                    <p><strong>Managing Company:</strong> {project.managingCompany}</p>
                    <p><strong>Tower:</strong> {project.towerType}, {project.towerHeight}</p>
                    <p><strong>Project For:</strong> {project.projectFor}</p>
                    <p><strong>Dates:</strong> {project.startDate} to {project.endDate}</p>
                    <p><strong>Tower Owner:</strong> {project.towerOwner}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <button className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-500">🛠 Create Rigging Plan</button>
                        <button className="bg-red-600 px-3 py-2 rounded hover:bg-red-700">⚠️ Emergency Locator</button>
                        <button className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-700">📐 Sling Layout</button>
                        <button className="bg-green-600 px-3 py-2 rounded hover:bg-green-700">📄 JSA creator</button>

                        <div className="flex gap-3 mt-6 mx-auto">
                            <button
                                onClick={() => handleEditProject(project)}
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition"
                            >
                                <span>✏️</span> Edit Project
                            </button>
                            <button
                                onClick={() => handleDelete(project.id)}
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition"
                            >
                                <span>🗑️</span> Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
