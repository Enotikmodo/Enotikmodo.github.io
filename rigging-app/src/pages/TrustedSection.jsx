import { motion } from "framer-motion";
import { FaHardHat, FaCheckCircle, FaGlobeAmericas, FaFileAlt } from "react-icons/fa";

const TrustedSection = () => {
    return (
        <section className="bg-[#0d1117] py-24 px-6 text-white text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-12"
            >
                Trusted by Telecom Field Teams Nationwide
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#161b22] p-6 rounded-xl shadow-md"
                >
                    <div className="text-yellow-400 text-3xl mb-3">
                        <FaHardHat />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Built for the Field</h3>
                    <p className="text-gray-400">
                        Designed by riggers and engineers, TowerRig fits real job workflows from ground to top hat.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#161b22] p-6 rounded-xl shadow-md"
                >
                    <div className="text-yellow-400 text-3xl mb-3">
                        <FaCheckCircle />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Safety-First Tools</h3>
                    <p className="text-gray-400">
                        Minimize errors with real-time calculations and compliant templates for safety reports.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#161b22] p-6 rounded-xl shadow-md"
                >
                    <div className="text-yellow-400 text-3xl mb-3">
                        <FaGlobeAmericas />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Cloud-Based & Fast</h3>
                    <p className="text-gray-400">
                        Access your data anytime. Sync reports, rigs, and team data from any device.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#161b22] p-6 rounded-xl shadow-md"
                >
                    <div className="text-yellow-400 text-3xl mb-3">
                        <FaFileAlt />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Paperwork Simplified</h3>
                    <p className="text-gray-400">
                        Generate PDFs, export reports, track JSAs, and send everything to management with one click.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedSection;
