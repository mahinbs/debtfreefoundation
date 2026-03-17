import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

// Placeholder product data
const products = [
    {
        id: 1,
        name: "Eco-Friendly notebook",
        category: "Stationery",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "Organic Cotton T-Shirt",
        category: "Apparel",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Handcrafted Ceramic Mug",
        category: "Home & Living",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Sustainable Water Bottle",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1602143407151-01114195191b?auto=format&fit=crop&q=80&w=800"
    }
];

const MartPreview = () => {
    return (
        <section id="mart" className="py-24 bg-white">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">DFF Mart</h2>
                        <p className="text-xl text-gray-500">
                            Our internal marketplace connecting member production with community consumption.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center text-primary font-bold hover:text-primary-dark transition-colors mt-4 md:mt-0">
                        View All Products <ShoppingCart className="ml-2 w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <p className="text-sm text-primary font-medium mb-1">{product.category}</p>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{product.name}</h3>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                        View All Products <ShoppingCart className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MartPreview;
