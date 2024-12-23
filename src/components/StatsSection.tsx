import {useState, useEffect} from "react";
import {DollarSign, Building2, Globe2, TrendingUp, Percent} from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

const StatsSection = () => {
    AOS.init();
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [animationPosition, setAnimationPosition] = useState(0);
    const [hoveredStats, setHoveredStats] = useState(null);

    // Animation frame for background effect
    useEffect(() => {
        const animate = () => {
            setAnimationPosition((prev) => (prev + 1) % 360);
        };

        const intervalId = setInterval(animate, 50);
        return () => clearInterval(intervalId);
    }, []);

    // Trigger stats visibility
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    // Animate numbers
    const animateValue = (start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
            return value;
        };
        window.requestAnimationFrame(step);
    };

    const stats = [
        {
            icon: <DollarSign className="w-8 h-8 text-purple-300" />,
            value: "$2.5B+",
            label: "Transaction Volume Processed",
            color: "from-blue-400 to-purple-400",
        },
        {
            icon: <Building2 className="w-8 h-8 text-purple-300" />,
            value: "50K+",
            label: "Active Businesses",
            color: "from-purple-400 to-pink-400",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-purple-300" />,
            value: "30+",
            label: "Countries Served",
            color: "from-pink-400 to-red-400",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-purple-300" />,
            value: "99.9%",
            label: "Uptime Reliability",
            color: "from-red-400 to-orange-400",
        },
    ];

    return (
        <div className="relative w-full bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 lg:py-24 overflow-hidden">
            {/* Animated background */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `
            radial-gradient(circle at ${Math.sin((animationPosition * Math.PI) / 180) * 100 + 50}% ${
                        Math.cos((animationPosition * Math.PI) / 180) * 100 + 50
                    }%, rgba(168, 85, 247, 0.4), transparent 50%),
            radial-gradient(circle at ${Math.cos((animationPosition * Math.PI) / 180) * 100 + 50}% ${
                        Math.sin((animationPosition * Math.PI) / 180) * 100 + 50
                    }%, rgba(147, 51, 234, 0.4), transparent 50%)
          `,
                }}
            />

            <div className="relative w-full px-4">
                {/* Fee Alert Banner */}
                <div className="max-w-4xl mx-auto mb-16 transform hover:scale-102 transition-transform duration-300">
                    <div className="relative  rounded-xl p-1">
                        <div className="bg-white rounded-lg p-6" data-aos="fade-up" data-aos-duration="3000">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <div className="bg-purple-100 p-3 rounded-full mr-4 transform rotate-12">
                                        <Percent className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-gray-900 font-bold">Just 2% Per Transaction</h3>
                                        <p className="text-gray-600">
                                            No hidden fees. No monthly charges. Only pay when you get paid.
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 
                                 transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                >
                                    Calculate Savings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Trusted by Businesses Worldwide
                    </h2>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                        We've helped thousands of businesses streamline their payment processes and grow their revenue
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="max-w-7xl mx-auto" data-aos="zoom-out-right">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`group flex flex-col items-center rounded-xl p-6 backdrop-blur-md
                           transform transition-all duration-300 cursor-pointer
                           ${hoveredStats === index ? "scale-105" : "scale-100"}
                           bg-gradient-to-br ${stat.color} bg-opacity-10 hover:bg-opacity-20`}
                                onMouseEnter={() => setHoveredStats(index)}
                                onMouseLeave={() => setHoveredStats(null)}
                            >
                                <div className="mb-4 bg-white/20 p-3 rounded-full transform transition-transform group-hover:rotate-12">
                                    {stat.icon}
                                </div>
                                <div
                                    className={`text-3xl lg:text-4xl font-bold mb-2 transition-all duration-1000
                                ${
                                    isVisible
                                        ? "opacity-100 transform translate-y-0"
                                        : "opacity-0 transform translate-y-4"
                                }`}
                                >
                                    {stat.value}
                                </div>
                                <p className="text-purple-100 text-center group-hover:text-white transition-colors">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
