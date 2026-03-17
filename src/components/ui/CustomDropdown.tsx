import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface Option {
    value: string;
    label: string;
}

interface CustomDropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
}

const CustomDropdown = ({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    label,
    className
}: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={cn("relative w-full", className)} ref={dropdownRef}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2.5 text-left text-sm transition-all duration-200 outline-none",
                    isOpen 
                        ? "border-primary ring-2 ring-primary/20 shadow-sm" 
                        : "border-gray-200 hover:border-gray-300 shadow-sm"
                )}
            >
                <span className={cn(
                    "block truncate",
                    !selectedOption ? "text-gray-400" : "text-gray-900 font-medium"
                )}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown 
                    className={cn(
                        "h-4 w-4 text-gray-400 transition-transform duration-200",
                        isOpen && "rotate-180 text-primary"
                    )} 
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-2xl"
                    >
                        <div className="max-h-60 overflow-y-auto p-1.5 scrollbar-thin scrollbar-thumb-gray-200">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors",
                                        value === option.value
                                            ? "bg-primary/10 text-primary font-semibold"
                                            : "text-gray-700 hover:bg-gray-50"
                                    )}
                                >
                                    <span>{option.label}</span>
                                    {value === option.value && (
                                        <Check className="h-4 w-4" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomDropdown;
