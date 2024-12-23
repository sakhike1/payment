import React, {useState} from "react";
import {Boxes, ArrowRight, Zap, Timer, BarChart3, Building} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const VersatilitySection = () => {
    AOS.init();
    const [hoveredCard, setHoveredCard] = useState(null);

    const processSteps = [
        {
            title: "Accept Payment",
            description: "Multiple payment methods supported",
            icon: <ArrowRight className="w-5 h-5 text-purple-200 mb-3" />,
        },
        {
            title: "Process Order",
            description: "Automated order management",
            icon: <Timer className="w-5 h-5 text-purple-200 mb-3" />,
        },
        {
            title: "Instant Settlement",
            description: "Funds in your account next day",
            icon: <BarChart3 className="w-5 h-5 text-purple-200 mb-3" />,
        },
    ];

    return (
        <div className="w-full bg-gradient-to-b from-white to-purple-50 py-16 lg:py-24">
            <div className="w-full px-4">
                {/* Main Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center mb-6 animate-fade-in">
                        <span
                            className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold 
                           transform transition-transform hover:scale-105 cursor-pointer"
                        >
                            Trusted by 50,000+ businesses
                        </span>
                    </div>
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 
                         bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
                    >
                        The New Standard in Payment Processing
                    </h2>
                    <p className="text-lg text-gray-600">
                        From local shops to enterprise businesses, PayFlow adapts to your needs and grows with your
                        business
                    </p>
                </div>

                {/* Business Types Grid */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                    {/* Small Business Card */}
                    <div
                        className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 
                       transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        onMouseEnter={() => setHoveredCard("small")}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-2 bg-purple-200 rounded-lg mr-3">
                                <Zap className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Perfect for Small Businesses</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                {icon: <Timer />, text: "Set up your payment system in minutes, not days"},
                                {icon: <BarChart3 />, text: "Clear analytics and insights to track your growth"},
                                {icon: <ArrowRight />, text: "Seamless integration with your existing systems"},
                            ].map((item, index) => (
                                <div key={index} className="flex items-start group">
                                    <div className="text-purple-600 mt-1 mr-3 transform transition-transform group-hover:scale-110">
                                        {React.cloneElement(item.icon, {className: "w-5 h-5"})}
                                    </div>
                                    <p className="text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise Card */}
                    <div
                        className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 
                       transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        onMouseEnter={() => setHoveredCard("enterprise")}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-2 bg-purple-200 rounded-lg mr-3">
                                <Building className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Scalable for Enterprises</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                {icon: <Boxes />, text: "Handle millions of transactions with ease"},
                                {icon: <ArrowRight />, text: "Custom solutions and dedicated support team"},
                                {icon: <Timer />, text: "Real-time processing and instant settlements"},
                            ].map((item, index) => (
                                <div key={index} className="flex items-start group">
                                    <div className="text-purple-600 mt-1 mr-3 transform transition-transform group-hover:scale-110">
                                        {React.cloneElement(item.icon, {className: "w-5 h-5"})}
                                    </div>
                                    <p className="text-gray-700">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Process Showcase */}
                <div
                    className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">Process Orders in Seconds</h3>
                        <p className="text-purple-100">
                            Our streamlined system handles everything from payment processing to order management
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative bg-white/10 hover:shadow-2xl  rounded-xl p-6 backdrop-blur-sm 
                         transform transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                            >
                                {step.icon}
                                <p className="font-semibold mb-2">{step.title}</p>
                                <p className="text-sm text-purple-100">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button
                        className="bg-purple-600 text-white px-8 py-3 hover:shadow-2xl rounded-full hover:bg-purple-700 
                           transform transition-all duration-300 hover:scale-105  
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Start Processing Payments
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VersatilitySection;
