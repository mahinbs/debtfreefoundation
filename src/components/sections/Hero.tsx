import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "../../contexts/LanguageContext";

const Hero = () => {
    const { t } = useTranslation();
    const scrollToHowItWorks = () => {
        const element = document.getElementById('how-it-works');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3')" }}
                ></div>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-900/80 to-slate-900/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        {t('landing.hero.titlePart1')}<br />
                        <span className="text-teal-50">{t('landing.hero.titlePart2')}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-teal-50 max-w-3xl mx-auto mb-10 drop-shadow-md font-medium">
                        {t('landing.hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/register"
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg block"
                        >
                            {t('landing.hero.ctaPrimary')}
                        </Link>
                        <button
                            onClick={scrollToHowItWorks}
                            className="bg-white/90 hover:bg-white text-primary px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
                        >
                            {t('landing.hero.ctaSecondary')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
