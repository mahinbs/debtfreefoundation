import { martProducts } from "../../data/mockData";
import { Search, ShoppingCart, Filter, Award } from "lucide-react";
import { useState } from "react";

const DffMartPage = () => {
    const [cartCount, setCartCount] = useState(2);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">DFF Mart</h1>
                    <p className="text-gray-500">Shop community-produced goods and earn bonus points.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center border border-yellow-100">
                        <Award className="w-4 h-4 mr-2" />
                        1,250 Points
                    </div>
                    <button className="relative p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <ShoppingCart className="w-5 h-5 text-gray-600" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                            {cartCount}
                        </span>
                    </button>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                </div>
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-200">
                        <Filter className="w-4 h-4" />
                        <span>All Categories</span>
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-50">Apparel</button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-50">Stationery</button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-50">Home</button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {martProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="aspect-square relative overflow-hidden bg-gray-100">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {product.stock === 'LOW_STOCK' && (
                                <div className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                    Low Stock
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-1">
                                <p className="text-xs text-gray-500">{product.category}</p>
                                <div className="flex items-center text-xs font-medium text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded">
                                    <Award className="w-3 h-3 mr-1" /> +{product.bonusPoints}
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                            <p className="text-xs text-gray-400 mb-3 truncate">By {product.producer}</p>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                                <button
                                    onClick={() => setCartCount(c => c + 1)}
                                    className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DffMartPage;
