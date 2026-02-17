// import { Users, Building2, TrendingUp, AlertCircle, CheckCircle2, Clock } from "lucide-react";

// User Types
export type UserRole = 'MEMBER' | 'PRODUCTION_LEAD' | 'ADMIN';

export interface User {
    id: string;
    name: string;
    role: UserRole;
    avatar: string;
    memberId: string;
    joinDate: string;
    kycStatus: 'VERIFIED' | 'PENDING' | 'REJECTED';
}

// User Mock
export const currentUser: User = {
    id: 'u1',
    name: 'Sarah Johnson',
    role: 'MEMBER',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    memberId: 'DFF-2024-8829',
    joinDate: '2024-01-15',
    kycStatus: 'VERIFIED'
};

// Financial Data Types
export interface Contribution {
    id: string;
    date: string;
    amount: number;
    type: 'MANUAL' | 'PROFIT_ADJUSTED';
    status: 'COMPLETED' | 'PENDING' | 'FAILED';
    referenceId: string;
}

export interface WalletStatus {
    safetyBufferBalance: number;
    contributionStreak: number;
    totalContributed: number;
    nextContributionDue: string;
    eligibleForDisbursement: boolean;
    disbursementProgress: number; // 0-100
}

// Financial Mock
export const walletData: WalletStatus = {
    safetyBufferBalance: 250000000, // 25 Cr
    contributionStreak: 42,
    totalContributed: 12500,
    nextContributionDue: '2026-02-18',
    eligibleForDisbursement: false,
    disbursementProgress: 65
};

export const contributionHistory: Contribution[] = [
    { id: 'c1', date: '2026-02-17', amount: 50, type: 'MANUAL', status: 'COMPLETED', referenceId: 'TXN-882901' },
    { id: 'c2', date: '2026-02-16', amount: 50, type: 'MANUAL', status: 'COMPLETED', referenceId: 'TXN-882902' },
    { id: 'c3', date: '2026-02-15', amount: 50, type: 'PROFIT_ADJUSTED', status: 'COMPLETED', referenceId: 'SYS-ADJ-001' },
    { id: 'c4', date: '2026-02-14', amount: 50, type: 'MANUAL', status: 'COMPLETED', referenceId: 'TXN-882903' },
    { id: 'c5', date: '2026-02-13', amount: 50, type: 'MANUAL', status: 'PENDING', referenceId: 'TXN-882904' },
];

// Production Unit Types
export interface ProductionUnit {
    id: string;
    name: string;
    sector: string;
    capital: number;
    members: number;
    profitability: number; // Percentage
    status: 'OPERATIONAL' | 'SETUP' | 'MAINTENANCE';
    nextPayout: string;
}

// Production Mock
export const myProductionUnit: ProductionUnit = {
    id: 'pu1',
    name: 'GreenTextiles Unit A',
    sector: 'Textiles',
    capital: 3000000,
    members: 20,
    profitability: 18.5,
    status: 'OPERATIONAL',
    nextPayout: '2026-03-01'
};

// Mart Data
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    bonusPoints: number;
    producer: string;
    stock: 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
}

export const martProducts: Product[] = [
    {
        id: 'p1',
        name: 'Organic Cotton T-Shirt',
        price: 450,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
        category: 'Apparel',
        bonusPoints: 45,
        producer: 'GreenTextiles Unit A',
        stock: 'IN_STOCK'
    },
    {
        id: 'p2',
        name: 'Eco-Friendly Notebook',
        price: 120,
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
        category: 'Stationery',
        bonusPoints: 12,
        producer: 'PaperCraft Collective',
        stock: 'IN_STOCK'
    },
    {
        id: 'p3',
        name: 'Handcrafted Ceramic Mug',
        price: 350,
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800',
        category: 'Home',
        bonusPoints: 35,
        producer: 'ClayWorks Group',
        stock: 'LOW_STOCK'
    },
    {
        id: 'p4',
        name: 'Bamboo Toothbrush Set',
        price: 180,
        image: 'https://images.unsplash.com/photo-1602143407151-01114195191b?auto=format&fit=crop&q=80&w=800',
        category: 'Personal Care',
        bonusPoints: 18,
        producer: 'EcoLiving Unit',
        stock: 'IN_STOCK'
    }
];

// Notifications
export const notifications = [
    { id: 1, title: 'Contribution Successful', message: 'Your daily contribution of ₹50 was received.', type: 'success', time: '2 hours ago' },
    { id: 2, title: 'New Product in Mart', message: 'Check out the new organic honey from Unit B.', type: 'info', time: '5 hours ago' },
    { id: 3, title: 'Production Update', message: 'GreenTextiles Unit A reached 110% efficiency.', type: 'success', time: '1 day ago' },
];

// Disbursement Queue Mock
export const disbursementQueue = [
    { id: 1, name: "Rahul V.", joinDate: "2023-11-01", amount: 350000, status: "PROCESSING" },
    { id: 2, name: "Priya M.", joinDate: "2023-11-05", amount: 350000, status: "QUEUED" },
    { id: 3, name: "Amit K.", joinDate: "2023-11-12", amount: 350000, status: "QUEUED" },
    { id: 4, name: "Sneha R.", joinDate: "2023-11-20", amount: 350000, status: "QUEUED" },
];

// Fraud Alerts Mock
export const fraudAlerts = [
    { id: 1, member: "User #9921", issue: "Multiple missed contributions", riskLevel: "HIGH", date: "2024-02-16" },
    { id: 2, member: "Unit #12 (Textiles)", issue: "Inventory mismatch > 5%", riskLevel: "MEDIUM", date: "2024-02-15" },
];

// Admin Data Mocks
export const allMembers: User[] = [
    { id: 'u1', name: 'Sarah Johnson', role: 'MEMBER', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', memberId: 'DFF-2024-8829', joinDate: '2024-01-15', kycStatus: 'VERIFIED' },
    { id: 'u2', name: 'Michael Chen', role: 'PRODUCTION_LEAD', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', memberId: 'DFF-2023-4421', joinDate: '2023-11-02', kycStatus: 'VERIFIED' },
    { id: 'u3', name: 'Priya Patel', role: 'MEMBER', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150', memberId: 'DFF-2024-0012', joinDate: '2024-02-01', kycStatus: 'PENDING' },
    { id: 'u4', name: 'David Kim', role: 'MEMBER', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', memberId: 'DFF-2023-9988', joinDate: '2023-12-10', kycStatus: 'REJECTED' },
    { id: 'u5', name: 'Emma Wilson', role: 'ADMIN', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150', memberId: 'DFF-ADMIN-01', joinDate: '2023-01-01', kycStatus: 'VERIFIED' },
    { id: 'u6', name: 'James Rod', role: 'MEMBER', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150', memberId: 'DFF-2024-1122', joinDate: '2024-01-20', kycStatus: 'VERIFIED' }
];

export const allProductionUnits: ProductionUnit[] = [
    myProductionUnit,
    { id: 'pu2', name: 'BlueWave Pottery', sector: 'Handicrafts', capital: 2800000, members: 18, profitability: 12.4, status: 'OPERATIONAL', nextPayout: '2026-03-05' },
    { id: 'pu3', name: 'SolarTech Assembly', sector: 'Electronics', capital: 4500000, members: 25, profitability: -2.1, status: 'MAINTENANCE', nextPayout: '2026-04-01' },
    { id: 'pu4', name: 'Organic Foods Co.', sector: 'Agriculture', capital: 3200000, members: 22, profitability: 8.9, status: 'OPERATIONAL', nextPayout: '2026-02-28' },
];
