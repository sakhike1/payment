import {useState} from "react";
import {CreditCard, Lock, Clock, ArrowRight, Check} from "lucide-react";

const ProcessPayment = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const features = [
        {
            icon: CreditCard,
            title: "Multiple Payment Methods",
            description:
                "Accept payments through credit cards, digital wallets, and bank transfers with our unified payment platform.",
            benefits: ["Credit & Debit Cards", "Digital Wallets", "Direct Bank Transfers"],
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Lock,
            title: "Secure Transactions",
            description:
                "Process payments with bank-grade security, fraud detection, and PCI DSS compliance for complete peace of mind.",
            benefits: ["PCI DSS Compliance", "Fraud Detection", "3D Secure 2.0"],
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Clock,
            title: "Real-Time Processing",
            description:
                "Experience instant payment processing with real-time notifications and automatic reconciliation.",
            benefits: ["Instant Confirmation", "Auto Reconciliation", "Payment Tracking"],
            color: "from-emerald-500 to-green-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans mt-10">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                        Simplified Payment Processing
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Accept payments globally with our secure, fast, and reliable payment processing system
                    </p>
                </div>

                {/* Payment Stats */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => setActiveFeature(index)}
                                onMouseLeave={() => setActiveFeature(null)}
                            >
                                <div
                                    className={`h-full bg-white rounded-2xl p-8 transition-all duration-300 
                  ${activeFeature === index ? "shadow-xl scale-105" : "shadow-md hover:shadow-lg"}`}
                                >
                                    {/* Icon Container */}
                                    <div
                                        className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${
                                            feature.color
                                        }
                    transform transition-all duration-300 ${activeFeature === index ? "scale-110" : ""}`}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                                    {/* Benefits List */}
                                    <div className="space-y-3">
                                        {feature.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-green-500" />
                                                <span className="text-gray-600 text-sm">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Learn More Link */}
                                    <div
                                        className={`mt-8 flex items-center text-sm font-medium transition-all duration-300
                    ${activeFeature === index ? "text-blue-600" : "text-gray-500"}`}
                                    >
                                        View Documentation
                                        <ArrowRight
                                            className={`ml-2 w-4 h-4 transition-transform duration-300
                      ${activeFeature === index ? "translate-x-1" : ""}`}
                                        />
                                    </div>

                                    {/* Decorative Background */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                                            feature.color
                                        } opacity-0 
                    transition-opacity duration-300 -z-10 ${activeFeature === index ? "opacity-5" : ""}`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Integration CTA */}
                <div className="mt-16 text-center">
                    <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                        <span className="relative z-10">Start Processing Payments</span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProcessPayment;
