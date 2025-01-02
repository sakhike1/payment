import {useState, useEffect} from "react";
import {CreditCard, Banknote, Shield} from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

import ProcessSection from "../components/ProcessSection";

const HeroSection = () => {
    const [isFirstCard, setIsFirstCard] = useState(true);

    useEffect(() => {
        AOS.init();
        const interval = setInterval(() => {
            setIsFirstCard((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const firstCardBg = isFirstCard
        ? "bg-gradient-to-tl from-green-200 via-indigo-50 to-violet-200"
        : "bg-gradient-to-tl from-violet-400 via-slate-50 to-zinc-100";

    const secondCardBg = isFirstCard
        ? "bg-gradient-to-tl from-violet-400 via-slate-50 to-zinc-100"
        : "bg-gradient-to-tl from-green-200 via-indigo-50 to-violet-200";

    return (
        <div
            className="text-white py-16 lg:py-24 w-full mt-5 animate-gradient"
            data-aos="fade-up"
            data-aos-duration="3000"
        >
            <div className="w-full  px-4">
                {/* Main Content */}
                <div className="flex flex-col items-center text-center mt-20 w-full">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-600 mb-6 animate-text">
                        Streamline Your Business Payments
                    </h1>
                    <p className="text-m lg:text-m text-gray-700 mb-8 animate-text">
                        Our payment services make it easy for your local business to accept and manage payments with
                        confidence.
                    </p>
                    <button
    className="inline-flex hover:shadow-2xl items-center px-5 py-3 border border-purple-700  text-purple-700 hover:bg-purple-50 rounded-full transition-colors animate-button focus:outline-none focus:ring-0"
    data-aos="fade-right"
>
    <CreditCard className="mr-2 h-5 w-5" />
    Accept Payments
</button>
                </div>

                {/* Features Grid */}
                <div className="mt-16 grid md:grid-cols-2 gap-8 w-full">
                    <div className="backdrop-blur-sm rounded-lg h-full">
                        <div
                            className={`flex hover:shadow-2xl rounded-md ${firstCardBg} flex-col items-center p-6 text-center animate-card transition-colors duration-1000 h-full`}
                        >
                            <Banknote className="h-12 w-12 mb-4 text-purple-600" />
                            <h3 className="text-xl text-gray-500 font-semibold mb-2">Secure Transactions</h3>
                            <p className="text-gray-700 text-sm">
                                Our payment platform ensures secure and reliable transactions for your business, with
                                real-time monitoring and fraud prevention.
                            </p>
                        </div>
                    </div>

                    <div className="backdrop-blur-sm rounded-lg h-full">
                        <div
                            className={`flex hover:shadow-2xl rounded-md ${secondCardBg} flex-col items-center p-6 text-center animate-card transition-colors duration-1000 h-full`}
                        >
                            <Shield className="h-12 w-12 mb-4 text-purple-600" />
                            <h3 className="text-xl text-gray-500 font-semibold mb-2">PCI Compliant</h3>
                            <p className="text-gray-700 text-sm">
                                We maintain the highest security standards to protect your customers' data, with full
                                PCI DSS compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ProcessSection />
        </div>
    );
};

export default HeroSection;
