import { motion } from "framer-motion";

const ProblemSolution = () => {
    return (
        <section id="problem" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">The Challenge</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Millions are trapped in a cycle of debt, limited opportunities, and financial stress.
                            Traditional models often fail to provide a sustainable path to wealth creation,
                            leaving hard-working individuals without a safety net or a way to grow.
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    Rising Debt & Inflation
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    Lack of Access to Capital
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    Isolated Economic Struggle
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-primary pl-4">The DFF Solution</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We leverage the power of community, collective production, and smart economic buffering.
                            By pooling resources and creating internal production units, we generate wealth that
                            circulates back to every member.
                        </p>
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                            <ul className="space-y-3">
                                <li className="flex items-center text-primary font-medium">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    Community-Driven Wealth
                                </li>
                                <li className="flex items-center text-primary font-medium">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    Zero-Tension Recovery
                                </li>
                                <li className="flex items-center text-primary font-medium">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    Sustainable Production Units
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
