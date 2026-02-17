import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, ChevronRight, Upload, CreditCard, PenTool, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    { id: 1, name: "Personal Info", icon: CheckCircle2 },
    { id: 2, name: "KYC Verification", icon: Upload },
    { id: 3, name: "Membership Fee", icon: CreditCard },
    { id: 4, name: "Digital Agreement", icon: PenTool },
];

const RegisterPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        kycDoc: null,
        agreed: false
    });

    const handleNext = () => {
        if (currentStep < 4) {
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
                <Link to="/" className="flex justify-center mb-6">
                    <span className="text-3xl font-bold text-primary tracking-tight">DFF</span>
                </Link>
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Join the Movement
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Start your journey to financial freedom today.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
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
                                    <span className={`text-xs mt-2 font-medium ${currentStep >= step.id ? "text-primary" : "text-gray-400"}`}>
                                        {step.name}
                                    </span>
                                </div>
                            ))}
                            {/* Connector Line */}
                            <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0 hidden"></div>
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
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: KYC */}
                        {currentStep === 2 && (
                            <div className="space-y-6 text-center">
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-primary transition-colors cursor-pointer bg-gray-50">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="mt-2 text-sm text-gray-600">Click to upload Aadhaar or PAN Card</p>
                                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                                </div>
                                <div className="flex items-center p-4 bg-yellow-50 rounded-md">
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-yellow-800">Verification Required</h3>
                                        <div className="mt-2 text-sm text-yellow-700">
                                            <p>Your documents will be verified within 24 hours.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Payment */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                                    <p className="text-gray-500 mb-2">One-time Membership Fee</p>
                                    <h3 className="text-4xl font-bold text-gray-900 mb-4">₹1,000</h3>
                                    <p className="text-sm text-gray-400">Secure payment via UPI / Card</p>
                                </div>
                                <button className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                    Pay via UPI
                                </button>
                                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    Pay via Credit/Debit Card
                                </button>
                            </div>
                        )}

                        {/* Step 4: Digital Agreement */}
                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="h-40 bg-gray-50 p-4 rounded-md border border-gray-200 overflow-y-auto text-xs text-gray-500">
                                    <h4 className="font-bold text-gray-700 mb-2">Terms & Conditions</h4>
                                    <p>1. I agree to contribute daily to the DFF buffer pool.</p>
                                    <p>2. I understand the 20-day collateral period.</p>
                                    <p>3. I agree to participate in manufacturing units assigned to me.</p>
                                    <p>...</p>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                        checked={formData.agreed}
                                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                                    />
                                    <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                                        I adhere to the DFF community guidelines and promise to maintain the "Zero Tension" spirit.
                                    </label>
                                </div>
                                <div className="border border-gray-300 rounded-md h-24 bg-white flex items-center justify-center text-gray-400 italic">
                                    (Digital Signature Pad Placeholder)
                                </div>
                            </div>
                        )}

                        <div className="mt-8 flex justify-between">
                            {currentStep > 1 && (
                                <button
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                disabled={currentStep === 4 && !formData.agreed}
                                className={`ml-auto flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                                    ${currentStep === 4 && !formData.agreed ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}
                                `}
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                                    <>
                                        {currentStep === 4 ? "Complete Registration" : "Next Step"}
                                        <ChevronRight className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already a member? <Link to="/login" className="font-medium text-primary hover:text-primary-dark">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
