import { useState } from "react";
import { contributionHistory, walletData } from "../../data/mockData";
import { ArrowDownLeft, ArrowUpRight, Search, FileDown } from "lucide-react";
import { cn } from "../../lib/utils";

const LedgerPage = () => {
    const [filter, setFilter] = useState("ALL");

    const filteredHistory = contributionHistory.filter(item => {
        if (filter === "ALL") return true;
        return item.status === filter;
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Financial Ledger</h1>
                    <p className="text-gray-500">Track your contributions and wallet history.</p>
                </div>
                <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <FileDown className="w-4 h-4 mr-2" />
                    Export Statement
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500">Total Contributed</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">₹{walletData.totalContributed.toLocaleString()}</h3>
                    <div className="mt-2 flex items-center text-xs text-green-600 font-medium">
                        <ArrowUpRight className="w-3 h-3 mr-1" /> Reliable Payer
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500">Current Streak</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1 text-primary">{walletData.contributionStreak} Days</h3>
                    <div className="mt-2 text-xs text-gray-400">
                        Keep it up to reach 100 days!
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-sm font-medium text-gray-500">Next Payment</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">Feb 18, 2026</h3>
                    <div className="mt-2 text-xs text-orange-500 font-medium flex items-center">
                        <ArrowDownLeft className="w-3 h-3 mr-1" /> Due in 24 hours
                    </div>
                </div>
            </div>

            {/* Transaction Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h3 className="text-lg font-bold text-gray-900">Transaction History</h3>

                    <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <div className="relative flex-1 sm:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search ID..."
                                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <select
                            className="border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="ALL">All Status</option>
                            <option value="COMPLETED">Completed</option>
                            <option value="PENDING">Pending</option>
                            <option value="FAILED">Failed</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 font-semibold uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Reference ID</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
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
                                            {item.status}
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
