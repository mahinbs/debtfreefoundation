import { motion } from "framer-motion";
import { Users, Coins, Factory, TrendingUp, ArrowRight } from "lucide-react";

// Lucide icon names must be uppercase for components
import { Shield } from "lucide-react";

const steps = [
    {
        icon: Users,
        title: "Onboarding & Unity",
        desc: "Join a community of 10,000+ members committed to financial freedom."
    },
    {
        icon: Coins,
        title: "Daily Contribution",
        desc: "Small, consistent contributions build a massive safety buffer pool."
    },
    {
        icon: Shield,
        title: "Safety Buffer",
        desc: "A protected pool ensures stability and supports members in need."
    },
    {
        icon: Factory,
        title: "Production Units",
        desc: "Funds are deployed into manufacturing units to generate real profit."
    },
    {
        icon: TrendingUp,
        title: "Wealth Distribution",
        desc: "Profits from DFF Mart and production are shared back to you."
    }
];

const DffWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How the Model Works</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        A transparent 5-step journey from participation to prosperity.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500">{step.desc}</p>

                                {/* Mobile Arrow */}
                                <div className="md:hidden mt-4 flex justify-center text-gray-300">
                                    {index < steps.length - 1 && <ArrowRight />}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DffWorks;
