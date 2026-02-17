import { motion } from "framer-motion";
import { UserCheck, BookOpen, Wallet, Factory, ShoppingBag, HeartHandshake, Bot } from "lucide-react";

const modules = [
    {
        icon: UserCheck,
        title: "Member Onboarding & KYC",
        desc: "Seamless verification ensuring a trusted network of verified individuals."
    },
    {
        icon: BookOpen,
        title: "Financial Ledger System",
        desc: "Transparent tracking of every contribution, ensuring complete accountability."
    },
    {
        icon: Wallet,
        title: "Disbursement & Equity",
        desc: "Fair distribution logic that prioritizes member needs and system health."
    },
    {
        icon: Factory,
        title: "Manufacturing Units",
        desc: "Community-owned production centers creating real value and goods."
    },
    {
        icon: ShoppingBag,
        title: "DFF Mart",
        desc: "Internal marketplace where members buy and sell produced goods."
    },
    {
        icon: HeartHandshake,
        title: "Zero Tension Recovery",
        desc: "A humane approach to financial recovery without harassment."
    },
    {
        icon: Bot,
        title: "AI Transparency Layer",
        desc: "Real-time insights and fraud detection powered by advanced AI."
    }
];

const ModulesGrid = () => {
    return (
        <section id="platform" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Modules</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        A comprehensive ecosystem designed to handle every aspect of economic growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
