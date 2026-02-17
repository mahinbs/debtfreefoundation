import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-900/20 skew-x-12 transform translate-x-20"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Break Free?
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                    Join 10,000+ members who are reclaiming their financial future.
                    Start your journey towards a debt-free life today.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/register"
                        className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-teal-900/50 flex items-center justify-center"
                    >
                        Become a Member <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <a
                        href="mailto:support@dff.org"
                        className="bg-transparent text-gray-400 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
