import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    Factory,
    ShoppingBag,
    Menu,
    X,
    Bell,
    LogOut,
    ShieldCheck,
    BrainCircuit
} from "lucide-react";
import { currentUser } from "../../data/mockData";

const AppLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
        { name: "Financial Ledger", href: "/app/ledger", icon: BookOpen },
        { name: "My Production Unit", href: "/app/production", icon: Factory },
        { name: "DFF Mart", href: "/app/mart", icon: ShoppingBag },
        { name: "Recovery Engine", href: "/app/recovery", icon: ShieldCheck },
        { name: "AI Insights", href: "/app/ai-insights", icon: BrainCircuit },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
                    <span className="text-2xl font-bold text-primary tracking-tight">DFF App</span>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden text-gray-400 hover:text-gray-500"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-5rem)] flex flex-col">
                    <div className="mb-8 flex-1">
                        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
                        {navigation.map((item) => {
                            const isActive = location.pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`
                      flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                      ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                    `}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <div className="px-4 py-3 flex items-center space-x-3">
                            <img src={currentUser.avatar} alt="User" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                                <p className="text-xs text-gray-500">{currentUser.memberId}</p>
                            </div>
                        </div>
                        <button
                            className="w-full mt-2 flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            onClick={() => window.location.href = '/'}
                        >
                            <LogOut className="w-4 h-4 mr-3" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden overflow-y-auto">
                {/* Header */}
                <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="flex-1 flex justify-end items-center space-x-4">
                        <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
