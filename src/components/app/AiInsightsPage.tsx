import { BrainCircuit, Lightbulb, AlertOctagon } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    { name: 'Jan', profit: 4000, savings: 2400 },
    { name: 'Feb', profit: 3000, savings: 1398 },
    { name: 'Mar', profit: 2000, savings: 9800 },
    { name: 'Apr', profit: 2780, savings: 3908 },
    { name: 'May', profit: 1890, savings: 4800 },
    { name: 'Jun', profit: 2390, savings: 3800 },
];

const AiInsightsPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">AI Insights</h1>
                    <p className="text-gray-500">Data-driven intelligence to maximize your wealth.</p>
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold flex items-center border border-indigo-100">
                    <BrainCircuit className="w-3 h-3 mr-1" /> AI Engine Active
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
                    <h3 className="font-bold text-gray-900 mb-6">Profitability Projection</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="profit" stackId="1" stroke="#008080" fill="#008080" fillOpacity={0.1} />
                                <Area type="monotone" dataKey="savings" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Smart Suggestions */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" /> Smart Suggestions
                    </h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                            <p className="text-sm font-bold text-gray-900 mb-1">Increase specific savings</p>
                            <p className="text-xs text-gray-600">Based on your spending, allocating ₹500 more to the buffer will unlock Tier 2 benefits.</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-sm font-bold text-gray-900 mb-1">Productivity Tip</p>
                            <p className="text-xs text-gray-600">Your unit is 5% below sector average efficiency. Consider optimizing shift module B.</p>
                        </div>
                    </div>
                </div>

                {/* Risk Analysis */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                        <AlertOctagon className="w-5 h-5 text-red-500 mr-2" /> Risk Factors
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Market Volatility</span>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Low</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <span className="text-sm text-gray-600">Supply Chain Delay</span>
                            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Moderate</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiInsightsPage;
