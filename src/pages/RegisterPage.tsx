import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, ChevronRight, Upload, CreditCard, PenTool, Loader2, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import CustomDropdown from "../components/ui/CustomDropdown";
import { useTranslation } from "../contexts/LanguageContext";
import { LOGO } from "../data/constant";

const RegisterPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        monthlyIncome: "",
        currentDebt: "",
        employmentStatus: "",
        kycDoc: null,
        agreed: false
    });

    const steps = [
        { id: 1, name: t('register.steps.personal'), icon: CheckCircle2 },
        { id: 2, name: t('register.steps.financial'), icon: IndianRupee },
        { id: 3, name: t('register.steps.kyc'), icon: Upload },
        { id: 4, name: t('register.steps.payment'), icon: CreditCard },
        { id: 5, name: t('register.steps.agreement'), icon: PenTool },
    ];

    const handleNext = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            navigate('/app/dashboard');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex justify-center mb-4">
                    <img src={LOGO} className="w-[4rem] md:w-[5rem] object-contain" />
                </Link>
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    {t('auth.signUpTitle')}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    {t('auth.signUpSubtitle')}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {/* Progress Bar */}
                    <div className="mb-8 overflow-x-auto">
                        <div className="flex items-center justify-between min-w-[500px] px-2">
                            {steps.map((step) => (
                                <div key={step.id} className="flex flex-col items-center relative z-10">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${currentStep >= step.id
                                                ? "bg-primary border-primary text-white"
                                                : "bg-white border-gray-300 text-gray-300"
                                            }`}
                                    >
                                        <step.icon className="w-4 h-4" />
                                    </div>
                                    <span className={`text-[10px] mt-2 font-medium break-words text-center w-16 ${currentStep >= step.id ? "text-primary" : "text-gray-400"}`}>
                                        {step.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Step 1: Personal Info */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{t('auth.fullName')}</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder={t('register.personal.namePlaceholder')}
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{t('auth.email')}</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder={t('register.personal.emailPlaceholder')}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{t('auth.phone')}</label>
                                    <input
                                        type="tel"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder={t('register.personal.phonePlaceholder')}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Financial Status */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{t('register.financial.income')}</label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder="e.g. 50000"
                                        value={formData.monthlyIncome}
                                        onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{t('register.financial.debt')}</label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder="e.g. 100000"
                                        value={formData.currentDebt}
                                        onChange={(e) => setFormData({ ...formData, currentDebt: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <CustomDropdown
                                        label={t('register.financial.employment')}
                                        options={[
                                            { value: "salaried", label: t('register.financial.options.salaried') },
                                            { value: "business", label: t('register.financial.options.business') },
                                            { value: "student", label: t('register.financial.options.student') },
                                            { value: "unemployed", label: t('register.financial.options.unemployed') },
                                        ]}
                                        value={formData.employmentStatus}
                                        onChange={(val) => setFormData({ ...formData, employmentStatus: val })}
                                        placeholder={t('register.financial.statusPlaceholder')}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 3: KYC */}
                        {currentStep === 3 && (
                            <div className="space-y-6 text-center">
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-primary transition-colors cursor-pointer bg-gray-50">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="mt-2 text-sm text-gray-600">{t('register.kyc.uploadTitle')}</p>
                                    <p className="text-xs text-gray-400 mt-1">{t('register.kyc.uploadHint')}</p>
                                </div>
                                <div className="flex items-center p-4 bg-yellow-50 rounded-md text-left">
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-yellow-800">{t('register.kyc.verificationTitle')}</h3>
                                        <div className="mt-2 text-sm text-yellow-700">
                                            <p>{t('register.kyc.verificationDesc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Payment */}
                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                                    <p className="text-gray-500 mb-2">{t('register.payment.feeTitle')}</p>
                                    <h3 className="text-4xl font-bold text-gray-900 mb-4">{t('register.payment.feeAmount')}</h3>
                                    <p className="text-sm text-gray-400">{t('register.payment.feeHint')}</p>
                                </div>
                                <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                    {t('register.payment.upiButton')}
                                </button>
                                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    {t('register.payment.cardButton')}
                                </button>
                            </div>
                        )}

                        {/* Step 5: Digital Agreement */}
                        {currentStep === 5 && (
                            <div className="space-y-6">
                                <div className="h-40 bg-gray-50 p-4 rounded-md border border-gray-200 overflow-y-auto text-xs text-gray-500">
                                    <h4 className="font-bold text-gray-700 mb-2">{t('register.agreement.title')}</h4>
                                    <p>{t('register.agreement.point1')}</p>
                                    <p>{t('register.agreement.point2')}</p>
                                    <p>{t('register.agreement.point3')}</p>
                                </div>
                                <div className="flex">
                                    <input
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        className="h-4 w-4 text-primary focus:ring-primary accent-primary border-gray-300 rounded mt-0.5"
                                        checked={formData.agreed}
                                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                                    />
                                    <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                                        {t('register.agreement.label')}
                                    </label>
                                </div>
                                <div className="border border-gray-300 rounded-md h-24 bg-white flex items-center justify-center text-gray-400 italic">
                                    {t('register.agreement.signaturePlaceholder')}
                                </div>
                            </div>
                        )}

                        <div className="mt-8 flex justify-between">
                            {currentStep > 1 && (
                                <button
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    {t('register.buttons.back')}
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                disabled={currentStep === 5 && !formData.agreed}
                                className={`ml-auto flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                                    ${currentStep === 5 && !formData.agreed ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}
                                `}
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                                    <>
                                        {currentStep === 5 ? t('register.buttons.complete') : t('register.buttons.next')}
                                        <ChevronRight className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        {t('auth.hasAccount')} <Link to="/login" className="font-medium text-primary hover:text-primary-dark">{t('auth.signIn')}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

