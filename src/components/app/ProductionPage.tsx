import { myProductionUnit } from "../../data/mockData";
import { Factory, Users, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, Tooltip } from 'recharts';

const ProductionPage = () => {
    // Mock data for charts
    const revenueData = [
        { month: 'Jan', val: 120000 },
        { month: 'Feb', val: 135000 },
        { month: 'Mar', val: 128000 },
        { month: 'Apr', val: 142000 },
        { month: 'May', val: 150000 },
        { month: 'Jun', val: 165000 },
    ];

    const equityData = [
        { month: 'Jan', val: 10 },
        { month: 'Feb', val: 12 },
        { month: 'Mar', val: 15 },
        { month: 'Apr', val: 18 },
        { month: 'May', val: 22 },
        { month: 'Jun', val: 25 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Production Unit</h1>
                    <p className="text-gray-500">Manage your collective manufacturing group.</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium border border-green-200">
                    {myProductionUnit.status}
                </span>
            </div>

            {/* Main Info Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-teal-900 p-6 sm:p-8 text-white relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply opacity-20 -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-2">{myProductionUnit.name}</h2>
                        <p className="text-teal-200 mb-6">{myProductionUnit.sector} Sector • ID: #PU-8821</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            <div>
                                <p className="text-teal-300 text-xs uppercase tracking-wider mb-1">Total Capital</p>
                                <p className="text-xl font-bold">₹{(myProductionUnit.capital / 100000).toFixed(1)} Lakhs</p>
                            </div>
                            <div>
                                <p className="text-teal-300 text-xs uppercase tracking-wider mb-1">Members</p>
                                <p className="text-xl font-bold">{myProductionUnit.members}</p>
                            </div>
                            <div>
                                <p className="text-teal-300 text-xs uppercase tracking-wider mb-1">Profitability</p>
                                <p className="text-xl font-bold text-green-400">+{myProductionUnit.profitability}%</p>
                            </div>
                            <div>
                                <p className="text-teal-300 text-xs uppercase tracking-wider mb-1">Next Payout</p>
                                <p className="text-xl font-bold">{myProductionUnit.nextPayout}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 flex items-center">
                                <DollarSign className="w-5 h-5 text-gray-400 mr-2" /> Revenue
                            </h3>
                            <span className="text-green-600 text-sm font-medium">+12% vs last month</span>
                        </div>
                        <div className="h-[100px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={revenueData}>
                                    <XAxis dataKey="month" hide />
                                    <Area type="monotone" dataKey="val" stroke="#008080" fill="#ccfbf1" strokeWidth={2} />
                                    <Tooltip cursor={false} contentStyle={{ fontSize: '12px' }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-4 lg:pl-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 flex items-center">
                                <TrendingUp className="w-5 h-5 text-gray-400 mr-2" /> Equity Growth
                            </h3>
                            <span className="text-primary text-sm font-medium">On Track</span>
                        </div>
                        <div className="h-[100px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={equityData}>
                                    <XAxis dataKey="month" hide />
                                    <Bar dataKey="val" fill="#3b82f6" radius={[2, 2, 0, 0]} barSize={20} />
                                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ fontSize: '12px' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-4 lg:pl-6">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 flex items-center">
                                <AlertTriangle className="w-5 h-5 text-gray-400 mr-2" /> Operations
                            </h3>
                            <span className="text-orange-500 text-sm font-medium">1 Alert</span>
                        </div>
                        <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                            <p className="text-sm text-orange-800 font-medium mb-1">Inventory Low</p>
                            <p className="text-xs text-orange-600">Raw material stock for cotton is below 15%.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-primary" /> Member Contributions
                    </h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">M{i}</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Member {i}</p>
                                        <p className="text-xs text-gray-500">Production Lead</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-gray-900">420/420</p>
                                    <p className="text-xs text-green-600">Active</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 py-2 text-sm text-primary font-medium hover:bg-primary/5 rounded-lg transition-colors">
                        View All Members
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Factory className="w-5 h-5 mr-2 text-primary" /> Active Orders
                    </h3>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-gray-500 uppercase">Order #ORD-9921</span>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">In Progress</span>
                            </div>
                            <p className="font-medium text-gray-900">500x Organic Cotton T-Shirts</p>
                            <p className="text-sm text-gray-500 mb-3">Due: Feb 28, 2026</p>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-gray-500 uppercase">Order #ORD-9922</span>
                                <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">Pending Material</span>
                            </div>
                            <p className="font-medium text-gray-900">200x Tote Bags</p>
                            <p className="text-sm text-gray-500 mb-3">Due: Mar 05, 2026</p>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionPage;
