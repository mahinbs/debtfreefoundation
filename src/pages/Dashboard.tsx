import { walletData, currentUser, disbursementQueue } from "../data/mockData";
import { TrendingUp, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useTranslation } from "../contexts/LanguageContext";

// Helper for detail cards
const KPICard = ({ title, value, icon: Icon, trend, color = "blue" }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start justify-between">
        <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            {trend && (
                <p className="text-xs font-medium text-green-600 mt-2 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" /> {trend}
                </p>
            )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-50 text-${color}-600`}>
            <Icon className="w-6 h-6" />
        </div>
    </div>
);

const Dashboard = () => {
    const { t } = useTranslation();
    
    // Mock chart data
    const chartData = [
        { day: 'Mon', amount: 50 },
        { day: 'Tue', amount: 50 },
        { day: 'Wed', amount: 50 },
        { day: 'Thu', amount: 50 },
        { day: 'Fri', amount: 50 },
        { day: 'Sat', amount: 50 },
        { day: 'Sun', amount: 50 },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('dashboard.welcome')}, {currentUser.name.split(' ')[0]}</h1>
                <p className="text-gray-500">{t('dashboard.subtitle')}</p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title={t('dashboard.stats.bufferShare')}
                    value="₹1,250"
                    icon={CheckCircle2}
                    color="teal"
                    trend={`+2.5% ${t('dashboard.trends.thisMonth')}`}
                />
                <KPICard
                    title={t('dashboard.stats.streak')}
                    value={`${walletData.contributionStreak} ${t('dashboard.days')}`}
                    icon={Calendar}
                    color="blue"
                    trend={t('dashboard.trends.perfectRecord')}
                />
                <KPICard
                    title={t('dashboard.stats.progress')}
                    value={`${walletData.disbursementProgress}%`}
                    icon={TrendingUp}
                    color="indigo"
                />
                <KPICard
                    title={t('dashboard.stats.nextContribution')}
                    value="Feb 18"
                    icon={AlertCircle}
                    color="orange"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Contribution Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h3 className="font-bold text-gray-900 mb-6">{t('dashboard.charts.weeklyTitle')}</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                <YAxis hide />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="amount" fill="#008080" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Disbursement Queue List */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4">{t('dashboard.queue.title')}</h3>
                    <div className="space-y-4">
                        {disbursementQueue.map((item, index) => (
                            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                    <span className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center font-bold text-gray-600 mr-3">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                        <p className="text-xs text-gray-500">{t('dashboard.queue.joined')} {item.joinDate}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-primary">₹{(item.amount / 1000).toFixed(0)}k</p>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.status === 'PROCESSING' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {item.status === 'PROCESSING' ? t('dashboard.queue.processing') : t('dashboard.queue.waiting')}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <button className="w-full mt-2 text-sm text-primary font-medium hover:text-primary-dark">
                            {t('dashboard.queue.viewFull')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

