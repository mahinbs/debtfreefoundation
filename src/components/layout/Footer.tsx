const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-primary tracking-tight">DFF</span>
                        <p className="mt-4 text-gray-500 text-sm">
                            Empowering communities through a debt-free economic ecosystem. Join us in building sustainable wealth.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Platform</h3>
                        <ul className="space-y-3">
                            <li><a href="/#how-it-works" className="text-gray-500 hover:text-primary text-sm">How It Works</a></li>
                            <li><a href="/#platform" className="text-gray-500 hover:text-primary text-sm">Production Benefit</a></li>
                            <li><a href="/#mart" className="text-gray-500 hover:text-primary text-sm">DFF Mart</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="/#problem" className="text-gray-500 hover:text-primary text-sm">About Us</a></li>
                            <li><a href="/#contact" className="text-gray-500 hover:text-primary text-sm">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-primary text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-primary text-sm">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Debt Free Foundation. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Social links placeholder */}
                        <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-primary">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
