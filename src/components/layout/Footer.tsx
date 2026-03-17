import { useTranslation } from "../../contexts/LanguageContext";
import { LOGO } from "../../data/constant";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <img src={LOGO} className="w-[8rem] md:w-[10rem] object-contain" />
                        <p className="mt-4 text-gray-500 text-sm">
                            {t('common.footer.tagline')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{t('common.footer.platform')}</h3>
                        <ul className="space-y-3">
                            <li><a href="/#how-it-works" className="text-gray-500 hover:text-primary text-sm">{t('common.footer.howItWorks')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{t('common.footer.company')}</h3>
                        <ul className="space-y-3">
                            <li><a href="/#problem" className="text-gray-500 hover:text-primary text-sm">{t('common.footer.aboutUs')}</a></li>
                            <li><a href="/#contact" className="text-gray-500 hover:text-primary text-sm">{t('common.footer.contact')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{t('common.footer.legal')}</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-primary text-sm">{t('common.footer.privacyPolicy')}</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-primary text-sm">{t('common.footer.termsOfService')}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} {t('common.footer.copyright')}
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-primary">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

