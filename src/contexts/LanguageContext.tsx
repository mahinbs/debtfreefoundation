import React, { createContext, useContext, useState, useEffect } from 'react';
import { en, ml } from '../locales';

type Language = 'en' | 'ml';
type Translations = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Translations> = { en, ml };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('dff_language');
        return (saved as Language) || 'en';
    });

    useEffect(() => {
        localStorage.setItem('dff_language', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (path: string): string => {
        const keys = path.split('.');
        let current: any = translations[language];
        
        for (const key of keys) {
            if (current[key] === undefined) {
                // console.warn(`Translation key not found: ${path}`);
                // Fallback to English if Malayalam key is missing
                let fallback: any = translations['en'];
                for (const fKey of keys) {
                    if (fallback[fKey] === undefined) return path;
                    fallback = fallback[fKey];
                }
                return typeof fallback === 'string' ? fallback : path;
            }
            current = current[key];
        }
        
        return typeof current === 'string' ? current : path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useTranslation must be used within a LanguageProvider');
    return context;
};
