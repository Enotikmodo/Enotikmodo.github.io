import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0d1117] text-gray-400 py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-6">

                {/* Logo + Creator */}
                <div className="flex items-center gap-3">
                    <img
                        src="../../public/buildrightacademy.png"
                        alt="logo"
                        className="w-6 h-6"
                    />
                    <a
                        href="https://buildrightacademy.us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:underline"
                    >
                        Made by BuildRight Academy
                    </a>
                </div>

                {/* Navigation */}
                <div className="flex space-x-6 text-sm">
                    <Link to="/" className="hover:text-white transition">Home</Link>
                    <a href="#features" className="hover:text-white transition">Features</a>
                    <a href="#register" className="hover:text-white transition">Register</a>
                    <Link to="/contact" className="hover:text-white transition">Contact</Link>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} BuildRight Academy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
