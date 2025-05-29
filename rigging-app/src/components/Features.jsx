import { motion } from "framer-motion";

const features = [
    {
        icon: "📐",
        title: "Rigging Plan Builder",
        description: "Create detailed rigging plans with force and angle calculations based on ANSI/TIA-322."
    },
    {
        icon: "⚠️",
        title: "Emergency Service Locator",
        description: "Generate service location documents based on the tower address and coordinates."
    },
    {
        icon: "📎",
        title: "Sling Layout Estimator",
        description: "Calculate optimal sling and tag locations for safe and balanced lifts."
    },
    {
        icon: "📄",
        title: "Write JSA",
        description: "Create job safety analyses for each project with reusable templates."
    },
    {
        icon: "📁",
        title: "Certificate Tracker",
        description: "Monitor certification status and expiration for all crew members."
    },
    {
        icon: "📝",
        title: "Rope Logs",
        description: "Maintain rigging rope logs and inspections per user."
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
                    Useful Telecom Features – All in One Place
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-[#161b22] rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-3xl mb-2">{feat.icon}</div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-1">{feat.title}</h3>
                            <p className="text-gray-400">{feat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
