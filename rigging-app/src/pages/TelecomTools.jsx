import { motion } from "framer-motion";

const telecomFeatures = [
    {
        title: "Rigging Plan Generator",
        description: "Easily configure rigging setups with angles and force calculations per ANSI/TIA-322."
    },
    {
        title: "Emergency Service Locator",
        description: "Find the nearest hospitals, fire stations, and EMS for your job site."
    },
    {
        title: "Sling Position Calculator",
        description: "Determine optimal sling positioning and load balancing based on tower geometry."
    },
    {
        title: "Rope Log Generator",
        description: "Quickly create and export rope usage logs for compliance and tracking."
    },
    {
        title: "Certificate Tracker",
        description: "Monitor team certifications, expiration dates, and document uploads."
    },
    {
        title: "JSA Writer",
        description: "Generate Job Safety Analysis documents tailored to each site’s specifics."
    }
];

const TelecomTools = () => {
    return (
        <section className="bg-[#161b22] py-24 px-6 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12"
                >
                    Useful Features for Telecom Professionals — All in One Place
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {telecomFeatures.map((tool, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-[#0d1117] rounded-2xl p-6 text-left shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{tool.title}</h3>
                            <p className="text-gray-400">{tool.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TelecomTools;
