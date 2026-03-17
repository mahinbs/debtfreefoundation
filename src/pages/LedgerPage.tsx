import { useState } from "react";
import { contributionHistory, walletData } from "../data/mockData";
import { ArrowDownLeft, ArrowUpRight, Search, FileDown } from "lucide-react";
import { cn } from "../lib/utils";
import CustomDropdown from "../components/ui/CustomDropdown";
import { useTranslation } from "../contexts/LanguageContext";

const LedgerPage = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState("ALL");

    const filteredHistory = contributionHistory.filter(item => {
        if (filter === "ALL") return true;
        return item.status === filter;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('ledger.title')}</h1>
                    <p className="text-gray-500">{t('ledger.subtitle')}</p>
                </div>
                <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <FileDown className="w-4 h-4 mr-2" />
                    {t('ledger.export')}
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500">{t('ledger.stats.totalContributed')}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">₹{walletData.totalContributed.toLocaleString()}</h3>
                    <div className="mt-2 flex items-center text-xs text-green-600 font-medium">
                        <ArrowUpRight className="w-3 h-3 mr-1" /> {t('ledger.stats.reliablePayer')}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500">{t('ledger.stats.currentStreak')}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1 text-primary">{walletData.contributionStreak} {t('dashboard.days')}</h3>
                    <div className="mt-2 text-xs text-gray-400">
                        {t('ledger.stats.streakDesc')}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500">{t('ledger.stats.nextPayment')}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">Feb 18, 2026</h3>
                    <div className="mt-2 text-xs text-orange-500 font-medium flex items-center">
                        <ArrowDownLeft className="w-3 h-3 mr-1" /> {t('ledger.stats.dueSoon')}
                    </div>
                </div>
            </div>

            {/* Transaction Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h3 className="text-lg font-bold text-gray-900">{t('ledger.table.title')}</h3>

                    <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <div className="relative flex-1 sm:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder={t('ledger.table.searchPlaceholder')}
                                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <CustomDropdown
                            className="w-full sm:w-48"
                            options={[
                                { value: "ALL", label: t('ledger.table.filter.all') },
                                { value: "COMPLETED", label: t('ledger.table.filter.completed') },
                                { value: "PENDING", label: t('ledger.table.filter.pending') },
                                { value: "FAILED", label: t('ledger.table.filter.failed') },
                            ]}
                            value={filter}
                            onChange={(val) => setFilter(val)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 font-semibold uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4">{t('ledger.table.headers.reference')}</th>
                                <th className="px-6 py-4">{t('ledger.table.headers.date')}</th>
                                <th className="px-6 py-4">{t('ledger.table.headers.type')}</th>
                                <th className="px-6 py-4">{t('ledger.table.headers.amount')}</th>
                                <th className="px-6 py-4">{t('ledger.table.headers.status')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredHistory.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs">{item.referenceId}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-2 py-1 rounded-full text-xs font-medium",
                                            item.type === 'MANUAL' ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"
                                        )}>
                                            {item.type.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">₹{item.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "flex items-center w-fit px-2 py-1 rounded-full text-xs font-medium",
                                            item.status === 'COMPLETED' && "bg-green-50 text-green-700",
                                            item.status === 'PENDING' && "bg-yellow-50 text-yellow-700",
                                            item.status === 'FAILED' && "bg-red-50 text-red-700"
                                        )}>
                                            {item.status === 'COMPLETED' && <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>}
                                            {item.status === 'PENDING' && <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-1.5 animate-pulse"></span>}
                                            {item.status === 'COMPLETED' ? t('ledger.table.filter.completed') : 
                                             item.status === 'PENDING' ? t('ledger.table.filter.pending') : 
                                             t('ledger.table.filter.failed')}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LedgerPage;

