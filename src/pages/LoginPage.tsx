import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "../contexts/LanguageContext";
import { LOGO } from "../data/constant";

const LoginPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        navigate('/app/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="absolute top-8 left-8">
                <Link to="/" className="flex items-center text-gray-500 hover:text-primary transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" /> {t('common.back')}
                </Link>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <img src={LOGO} className="w-[4rem] md:w-[5rem] object-contain" />
                </div>
                <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                    {t('auth.signInTitle')}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
                        {t('auth.noAccount')}
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="memberId" className="block text-sm font-medium text-gray-700">
                                {t('auth.memberIdLabel')}
                            </label>
                            <div className="mt-1">
                                <input
                                    id="memberId"
                                    name="memberId"
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    defaultValue="DFF-USER-001"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                                {t('auth.pinLabel')}
                            </label>
                            <div className="mt-1">
                                <input
                                    id="pin"
                                    name="pin"
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    defaultValue="1234"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary accent-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    {t('auth.rememberMe')}
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-primary-dark">
                                    {t('auth.forgotPin')}
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                            >
                                {t('auth.signInButton')}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">{t('auth.secureAccess')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

