import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "../../contexts/LanguageContext";
import CustomDropdown from "../ui/CustomDropdown";
import { LOGO } from "../../data/constant";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { t, language, setLanguage } = useTranslation();

    const navLinks = [
        { name: t('nav.home'), href: "/#hero" },
        { name: t('nav.transparency'), href: "/#problem" },
        { name: t('nav.howItWorks'), href: "/#how-it-works" },
        { name: t('nav.platform'), href: "/#platform" },
    ];

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'ml', label: 'മലയാളം' }
    ];

    const handleScroll = (e: any, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.split("#")[1];

        if (location.pathname !== '/') {
            navigate(`/${targetId ? '#' + targetId : ''}`);
            return;
        }

        if (!targetId || targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img src={LOGO} className="w-[4rem] md:w-[5rem] object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="text-gray-600 hover:text-primary transition-colors font-medium cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 border-l border-gray-100 pl-6">
                            {/* Custom Language Dropdown */}
                            <div className="w-28">
                                <CustomDropdown
                                    options={languageOptions}
                                    value={language}
                                    onChange={(val) => setLanguage(val as 'en' | 'ml')}
                                    className="h-10"
                                />
                            </div>

                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/login"
                                    className="text-gray-900 font-medium hover:text-primary transition-colors"
                                >
                                    {t('nav.login')}
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-colors"
                                >
                                    {t('nav.register')}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <div className="w-32">
                            <CustomDropdown
                                options={languageOptions}
                                value={language}
                                onChange={(val) => setLanguage(val as 'en' | 'ml')}
                                className="h-9"
                            />
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg"
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 space-y-3">
                            <Link
                                to="/login"
                                className="block w-full text-center px-6 py-3 border border-gray-200 rounded-xl font-medium text-gray-900 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {t('nav.login')}
                            </Link>
                            <Link
                                to="/register"
                                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {t('nav.register')}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

