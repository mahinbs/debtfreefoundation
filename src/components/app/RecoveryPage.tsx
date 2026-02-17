import { ShieldCheck, RefreshCw, HandHeart } from "lucide-react";

const RecoveryPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Zero Tension Recovery</h1>
                    <p className="text-gray-500">Understanding how your safety buffer protects you.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Visual Flow */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                    <h3 className="font-bold text-gray-900 mb-8">Role of the Safety Buffer</h3>

                    <div className="relative">
                        {/* Connection Lines (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gray-100 rounded z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {/* Step 1 */}
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                                    <ShieldCheck className="w-10 h-10 text-green-600" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">1. Emergency Detected</h4>
                                <p className="text-sm text-gray-500">If you miss a contribution due to a verified emergency.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                                    <RefreshCw className="w-10 h-10 text-blue-600" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">2. Auto-Adjustment</h4>
                                <p className="text-sm text-gray-500">The system automatically draws from your accrued manufacturing profits.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                                    <HandHeart className="w-10 h-10 text-primary" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">3. Zero Harassment</h4>
                                <p className="text-sm text-gray-500">No calls, no pressure. Your standing remains intact.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Current Status: Protected
                        </h4>
                        <p className="text-sm text-gray-600">
                            You have enough accrued profit share to cover <strong>3 missed contributions</strong> without affecting your credit score or standing.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="space-y-6">
                    <div className="bg-primary text-white rounded-xl shadow-lg p-6">
                        <h3 className="font-bold text-lg mb-1">Protection Level</h3>
                        <p className="text-primary-100 text-sm mb-6">Based on your production unit equity.</p>

                        <div className="text-4xl font-bold mb-2">High</div>
                        <div className="w-full bg-black/20 rounded-full h-2 mb-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-xs text-primary-100">85% Coverage</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Recovery History</h3>
                        <div className="text-center py-8 text-gray-400 text-sm">
                            No recovery events triggered yet.<br />Great job!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoveryPage;
