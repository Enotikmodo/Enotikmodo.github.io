import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Hero = () => {
    const { currentUser } = useAuth();

    return (
        <section className="relative text-center text-white h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/bg-tower.png)',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-3xl px-4"
            >
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow">
                    All Telecom Tools in One Place
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300 drop-shadow">
                    Created in partnership with <span className="text-yellow-400 font-semibold">BuildRight Academy</span>, TowerRig combines everything you need — from rigging plans and emergency locators to certification tracking.
                </p>

                <Link
                    to={currentUser ? "/dashboard" : "/login"}
                    className="inline-block mt-8 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-xl transition"
                >
                    {currentUser ? "Go to Dashboard" : "Login or Register"}
                </Link>
            </motion.div>

            {/* Bottom SVG decoration */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-full h-[80px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0L1200 0 1200 120 0 0z" fill="#0d1117" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
