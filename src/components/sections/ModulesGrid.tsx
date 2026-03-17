import { motion } from "framer-motion";
import { UserCheck, BookOpen, Wallet, /* Factory, ShoppingBag, */ HeartHandshake, Bot } from "lucide-react";
import { useTranslation } from "../../contexts/LanguageContext";

const ModulesGrid = () => {
    const { t } = useTranslation();

    const modules = [
        {
            icon: UserCheck,
            title: t('landing.modulesGrid.onboarding.title'),
            desc: t('landing.modulesGrid.onboarding.desc')
        },
        {
            icon: BookOpen,
            title: t('landing.modulesGrid.ledger.title'),
            desc: t('landing.modulesGrid.ledger.desc')
        },
        {
            icon: Wallet,
            title: t('landing.modulesGrid.disbursement.title'),
            desc: t('landing.modulesGrid.disbursement.desc')
        },
        {
            icon: HeartHandshake,
            title: t('landing.modulesGrid.recovery.title'),
            desc: t('landing.modulesGrid.recovery.desc')
        },
        {
            icon: Bot,
            title: t('landing.modulesGrid.ai.title'),
            desc: t('landing.modulesGrid.ai.desc')
        }
    ];

    return (
        <section id="platform" className="py-24 bg-gray-50">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('landing.modulesGrid.title')}</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        {t('landing.modulesGrid.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="p-3 bg-teal-50 rounded-lg text-primary mb-4">
                                <module.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                            <p className="text-sm text-gray-500">{module.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModulesGrid;

