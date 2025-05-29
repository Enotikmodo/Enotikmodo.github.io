import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RiggingPlan from "./pages/RiggingPlan"; // создай эту страницу
import UserSettings from './pages/UserSettings';


function App() {
    return (
        <Router>
            <Header />
            <main className="min-h-screen bg-[#0d1117] text-white">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/rigging/:id" element={<RiggingPlan />} />
                    <Route path="/settings" element={<UserSettings />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
