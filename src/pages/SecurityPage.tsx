import { useState, useRef } from "react";
import { ShieldCheck, Lock, Eye, EyeOff, Loader2, User, Camera, Check } from "lucide-react";
import { motion } from "framer-motion";
import { currentUser } from "../data/mockData";
import { useTranslation } from "../contexts/LanguageContext";

const SecurityPage = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [isProfileUpdating, setIsProfileUpdating] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    
    const [profileData, setProfileData] = useState({
        name: currentUser.name,
        avatar: currentUser.avatar
    });
    
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData({ ...profileData, avatar: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProfileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProfileUpdating(true);
        // Simulate API call
        setTimeout(() => {
            setIsProfileUpdating(false);
            alert("Profile updated successfully!");
        }, 1200);
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert("Password updated successfully!");
            setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
        }, 1500);
    };

    return (
        <div className="max-w-2xl space-y-6">
            <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('settings.title')}</h1>
                    <p className="text-gray-500 text-sm">{t('settings.subtitle')}</p>
                </div>
            </div>

            {/* Profile Information Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
                <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
                    <User className="w-5 h-5 text-gray-400" />
                    <h2 className="font-bold text-gray-900">{t('settings.profileInfo')}</h2>
                </div>

                <form onSubmit={handleProfileSubmit} className="p-6 space-y-6">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm ring-1 ring-gray-100">
                                <img 
                                    src={profileData.avatar} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all transform hover:scale-110"
                            >
                                <Camera className="w-4 h-4" />
                            </button>
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                className="hidden" 
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                        </div>
                        
                        <div className="flex-1 w-full space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('settings.displayName')}</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all px-4 py-2.5 sm:text-sm border"
                                    value={profileData.name}
                                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isProfileUpdating}
                                    className="flex items-center px-6 py-2 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all disabled:opacity-50 text-sm"
                                >
                                    {isProfileUpdating ? (
                                        <>
                                            <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />
                                            {t('settings.saving')}
                                        </>
                                    ) : (
                                        <>
                                            <Check className="w-3.5 h-3.5 mr-2" />
                                            {t('settings.saveProfile')}
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </motion.div>

            {/* Change Password Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
                <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-gray-400" />
                    <h2 className="font-bold text-gray-900">{t('settings.changePassword')}</h2>
                </div>

                <form onSubmit={handlePasswordSubmit} className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('settings.currentPassword')}</label>
                            <div className="relative">
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    required
                                    className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all px-4 py-2.5 sm:text-sm border"
                                    value={passwordData.currentPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('settings.newPassword')}</label>
                                <div className="relative">
                                    <input
                                        type={showNewPassword ? "text" : "password"}
                                        required
                                        className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all px-4 py-2.5 sm:text-sm border"
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('settings.confirmPassword')}</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20 transition-all px-4 py-2.5 sm:text-sm border"
                                    value={passwordData.confirmPassword}
                                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center flex-wrap gap-3 justify-between">
                        <div className="text-xs text-gray-500 max-w-[200px]">
                            {t('settings.passReq')}
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    {t('settings.updating')}
                                </>
                            ) : (
                                t('settings.updatePassword')
                            )}
                        </button>
                    </div>
                </form>
            </motion.div>

            {/* Security Tips */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-blue-900 mb-2">{t('settings.securityGuidelines')}</h3>
                <ul className="text-xs text-blue-700 space-y-1.5">
                    <li className="flex items-center tracking-wide">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {t('settings.guideline1')}
                    </li>
                    <li className="flex items-center tracking-wide">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {t('settings.guideline2')}
                    </li>
                    <li className="flex items-center tracking-wide">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {t('settings.guideline3')}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SecurityPage;
