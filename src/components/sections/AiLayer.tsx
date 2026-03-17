import { motion } from "framer-motion";
import { BrainCircuit, LineChart, ShieldCheck, Zap } from "lucide-react";
import { useTranslation } from "../../contexts/LanguageContext";

const AiLayer = () => {
    const { t } = useTranslation();
    const features = [
        {
            icon: BrainCircuit,
            title: t('landing.aiLayer.features.predictive.title'),
            desc: t('landing.aiLayer.features.predictive.desc')
        },
        {
            icon: LineChart,
            title: t('landing.aiLayer.features.profitability.title'),
            desc: t('landing.aiLayer.features.profitability.desc')
        },
        {
            icon: ShieldCheck,
            title: t('landing.aiLayer.features.fraud.title'),
            desc: t('landing.aiLayer.features.fraud.desc')
        },
        {
            icon: Zap,
            title: t('landing.aiLayer.features.disbursement.title'),
            desc: t('landing.aiLayer.features.disbursement.desc')
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* AI Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <BrainCircuit className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{t('landing.aiLayer.core.title')}</h3>
                                    <p className="text-sm text-gray-500">{t('landing.aiLayer.core.status')}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                        <div className="h-2 bg-gray-100 rounded flex-1 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${60 + i * 10}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-teal-400 to-teal-600"
                                            />
                                        </div>
                                        <span className="text-xs text-gray-400 font-mono">9{8 + i}%</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <p className="text-xs text-gray-500 font-mono mb-2">{t('landing.aiLayer.core.analysis')}</p>
                                <p className="text-sm font-medium text-gray-800">{t('landing.aiLayer.core.projection')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('landing.aiLayer.title').split(' ').slice(0, -2).join(' ')} <span className="text-primary">{t('landing.aiLayer.title').split(' ').slice(-2).join(' ')}</span></h2>
                        <p className="text-lg text-gray-600 mb-8">
                            {t('landing.aiLayer.subtitle')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                    <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{feature.title}</h4>
                                        <p className="text-sm text-gray-500 leading-snug">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiLayer;
