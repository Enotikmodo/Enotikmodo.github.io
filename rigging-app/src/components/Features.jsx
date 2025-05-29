import { motion } from "framer-motion";

const features = [
    {
        title: "Accurate Calculations",
        description: "Lift force, tag angle, block configuration — all based on ANSI/TIA-322 industry standards."
    },
    {
        title: "Team & Company Management",
        description: "Create your company, add teams and track member certifications in one dashboard."
    },
    {
        title: "Project History",
        description: "View current and completed tower projects, access past reports, and analyze performance."
    },
    {
        title: "PDF Reports & Exports",
        description: "Export rigging plans as professional PDF files with calculation breakdowns."
    }
];

const Features = () => {
    return (
        <section id="features" className="bg-[#0d1117] py-24 px-6 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12"
                >
                    Why Choose Our App
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-[#161b22] rounded-2xl p-6 text-left shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{feat.title}</h3>
                            <p className="text-gray-400">{feat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
