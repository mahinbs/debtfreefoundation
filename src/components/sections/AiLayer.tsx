import { motion } from "framer-motion";
import { BrainCircuit, LineChart, ShieldCheck, Zap } from "lucide-react";

const AiLayer = () => {
    const features = [
        {
            icon: BrainCircuit,
            title: "Predictive Insights",
            desc: "Smart algorithms analyze spending habits to suggest optimal savings paths."
        },
        {
            icon: LineChart,
            title: "Profitability Intelligence",
            desc: "Data-driven decisions for manufacturing units to maximize output."
        },
        {
            icon: ShieldCheck,
            title: "Fraud Detection",
            desc: "Real-time monitoring protects the ecosystem from bad actors."
        },
        {
            icon: Zap,
            title: "Smart Disbursement",
            desc: "AI-assisted logic ensures funds reach those who need them most effectively."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                    <h3 className="font-bold text-gray-900">DFF Intelligence Core</h3>
                                    <p className="text-sm text-gray-500">System Status: Active</p>
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
                                <p className="text-xs text-gray-500 font-mono mb-2">Analysis Result</p>
                                <p className="text-sm font-medium text-gray-800">Community wealth projection indicates 15% growth Q3.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Powered by <span className="text-primary">Intelligent Data</span></h2>
                        <p className="text-lg text-gray-600 mb-8">
                            The DFF ecosystem isn't just a community; it's a smart network.
                            We use advanced analytics to ensure sustainability, fair distribution, and maximum growth for every member.
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
