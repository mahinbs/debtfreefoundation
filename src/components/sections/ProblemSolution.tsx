import { motion } from "framer-motion";
import { useTranslation } from "../../contexts/LanguageContext";

const ProblemSolution = () => {
    const { t } = useTranslation();
    return (
        <section id="problem" className="py-20 bg-gray-50">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-red-500 pl-4">{t('landing.problemSolution.challenge.title')}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t('landing.problemSolution.challenge.text')}
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    {t('landing.problemSolution.challenge.item1')}
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    {t('landing.problemSolution.challenge.item2')}
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                    {t('landing.problemSolution.challenge.item3')}
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
                        <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-primary pl-4">{t('landing.problemSolution.solution.title')}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t('landing.problemSolution.solution.text')}
                        </p>
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                            <ul className="space-y-3">
                                <li className="flex items-center text-primary font-medium">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    {t('landing.problemSolution.solution.item1')}
                                </li>
                                <li className="flex items-center text-primary font-medium">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    {t('landing.problemSolution.solution.item2')}
                                </li>
                                <li className="flex items-center text-primary font-medium">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    {t('landing.problemSolution.solution.item3')}
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
