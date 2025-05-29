import { motion } from "framer-motion";

const CallToAction = () => {
    return (
        <section id="register" className="bg-[#0d1117] py-24 px-6 text-white text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold"
            >
                Start Using Rigging Configurator
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-gray-400 mt-4"
            >
                Create your account and start calculating like a pro.
            </motion.p>
            <motion.a
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-10 inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300"
            >
                Register
            </motion.a>
        </section>
    );
};

export default CallToAction;
