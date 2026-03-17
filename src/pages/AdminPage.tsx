import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TrendingUp, Activity, AlertOctagon, BookOpen, Search, MoreVertical } from "lucide-react";
import { fraudAlerts, allMembers, /* allProductionUnits, martProducts */ } from "../data/mockData";

const AdminPage = () => {
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'overview';
    const [searchTerm, setSearchTerm] = useState("");

    // --- SUB-COMPONENTS ---

    const OverviewTab = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Members</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">10,420</h3>
                    <p className="text-xs text-green-600 mt-2 flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +125 this week</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Buffer Pool</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">₹25.4 Cr</h3>
                    <p className="text-xs text-green-600 mt-2 flex items-center"><TrendingUp className="w-3 h-3 mr-1" /> +1.2% growth</p>
                </div>
                {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
27:                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Units</p>
28:                     <h3 className="text-3xl font-bold text-gray-900 mt-2">52</h3>
29:                     <p className="text-xs text-gray-500 mt-2">All operational</p>
30:                 </div> */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">System Alerts</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">3</h3>
                    <p className="text-xs text-orange-600 mt-2 font-medium">Attention Required</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-red-50 flex items-center justify-between">
                        <h3 className="font-bold text-red-900 flex items-center">
                            <AlertOctagon className="w-4 h-4 mr-2" />
                            Fraud Detection AI
                        </h3>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-bold">LIVE</span>
                    </div>
                    <div className="p-4 space-y-3">
                        {fraudAlerts.map((alert) => (
                            <div key={alert.id} className="flex items-start p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-sm font-bold text-gray-900">{alert.member}</p>
                                        <span className="text-[10px] text-gray-400">{alert.date}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">{alert.issue}</p>
                                </div>
                                <div className={`ml-3 px-2 py-1 rounded text-[10px] font-bold ${alert.riskLevel === 'HIGH' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {alert.riskLevel} RISK
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                        <h3 className="font-bold text-gray-900">Recent System Logs</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="px-6 py-3 flex items-center justify-between text-sm">
                                <div className="flex items-center">
                                    <Activity className="w-4 h-4 text-gray-400 mr-3" />
                                    <span className="font-mono text-gray-600 mr-4">13:4{i}:22</span>
                                    <span className="text-gray-900">Automated disbursement check completed</span>
                                </div>
                                <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded">OK</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const MembersTab = () => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h3 className="font-bold text-gray-900">Member Database</h3>
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search members..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 text-gray-900 font-semibold uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Joined</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {allMembers.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase())).map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 flex items-center">
                                    <img src={member.avatar} className="w-8 h-8 rounded-full mr-3" alt="" />
                                    <div>
                                        <p className="font-medium text-gray-900">{member.name}</p>
                                        <p className="text-xs text-gray-500">{member.memberId}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs font-mono">{member.role}</td>
                                <td className="px-6 py-4">{member.joinDate}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${member.kycStatus === 'VERIFIED' ? 'bg-green-100 text-green-700' :
                                        member.kycStatus === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {member.kycStatus}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-gray-400 hover:text-primary"><MoreVertical className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    /* const ProductionTab = () => (
140:         <div className="space-y-6">
...
176:         </div>
177:     ); */

    const FinancialsTab = () => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
            <BookOpen className="w-16 h-16 text-gray-200 mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Financial Master Ledger</h3>
            <p className="text-gray-500 max-w-md mt-2">
                This module would contain the complete transaction history of the ₹25.4 Cr safety buffer pool, disbursement approvals, and bank reconciliations.
            </p>
            <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark">
                Download Audit Report
            </button>
        </div>
    );

    /* const InventoryTab = () => (
193:         <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
...
230:         </div>
231:     ); */

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Admin Control Center</h1>
                    <p className="text-gray-500">System-wide operational overview.</p>
                </div>
                <div className="bg-gray-900 text-white px-3 py-1 rounded text-xs font-bold font-mono">
                    SYS STATUS: OPERATIONAL
                </div>
            </div>

            {/* Content Area */}
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'members' && <MembersTab />}
            {/* {activeTab === 'production' && <ProductionTab />} */}
            {activeTab === 'financials' && <FinancialsTab />}
            {/* {activeTab === 'inventory' && <InventoryTab />} */}
        </div>
    );
};

export default AdminPage;
