import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "../../contexts/LanguageContext";

const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    // Use spring for smooth counting
    const springValue = useSpring(0, {
        damping: 30,
        stiffness: 100,
        duration: duration * 1000
    });

    const displayValue = useTransform(springValue, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatItem = ({ label, value, prefix = "", suffix = "", rawValue = 0 }: { label: string, value: string, prefix?: string, suffix?: string, rawValue?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300"
            >
                {prefix}
                {rawValue > 0 ? <AnimatedCounter value={rawValue} /> : value}
                {suffix}
            </motion.div>
            <p className="text-teal-100/80 font-medium uppercase tracking-widest text-xs md:text-sm">{label}</p>
        </div>
    );
};

const LedgerItem = ({ type, data, delay }: { type: string, data: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay * 0.1, duration: 0.5 }}
        className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors"
    >
        <div>
            <p className="text-[10px] uppercase text-teal-300/70 font-semibold mb-1 tracking-wider">{type}</p>
            <p className="font-mono text-sm text-white/90">{data}</p>
        </div>
        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
    </motion.div>
);

const Transparency = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Rich Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-900 to-slate-900"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '7s' }}></div>

            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            {t('landing.transparency.title').split(' & ')[0]} & <span className="text-teal-400">{t('landing.transparency.title').split(' & ')[1]}</span>
                        </h2>
                        <p className="text-xl text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
                            {t('landing.transparency.subtitle')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-2xl mx-auto">
                    <StatItem label={t('landing.transparency.stats.members')} value="10,000" suffix="+" rawValue={10000} />
                    <StatItem label={t('landing.transparency.stats.buffer')} value="25" prefix="₹" suffix=" Cr" rawValue={25} />
                </div>

                {/* Real-Time Ledger Section */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl blur opacity-20"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden">

                        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inline-flex opacity-75"></span>
                                    <span className="w-3 h-3 bg-emerald-500 rounded-full relative inline-flex"></span>
                                    {t('landing.transparency.ledger.title')}
                                </h3>
                                <p className="text-teal-100/60 text-sm mt-1">{t('landing.transparency.ledger.subtitle')}</p>
                            </div>
                            <div className="px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                                • {t('landing.transparency.ledger.status')}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <LedgerItem type={t('landing.transparency.ledger.contribution')} data="#TXN-8829 • ₹500" delay={0} />
                            <LedgerItem type={t('landing.transparency.ledger.contribution')} data="#TXN-8830 • ₹1,200" delay={1} />
                            <LedgerItem type={t('landing.transparency.ledger.newMember')} data="Bangalore • ID: 10442" delay={2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transparency;
