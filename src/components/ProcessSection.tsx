import {motion} from "framer-motion";
import {ArrowRight, Store, CreditCard, BarChart, Zap} from "lucide-react";

const ProcessSection = () => {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const floatingAnimation = {
        y: [-10, 10],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        },
    };

    const steps = [
        {
            icon: Store,
            title: "Create Account",
            description: "Sign up with your business details and verify your identity",
        },
        {icon: Zap, title: "Connect Bank", description: "Link your business bank account for direct deposits"},
        {icon: CreditCard, title: "Accept Payments", description: "Start processing payments from customers instantly"},
        {icon: BarChart, title: "Track Growth", description: "Monitor your business performance in real-time"},
    ];

    return (
        <div className="relative w-full mt-20   py-16 lg:py-24 overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-full h-full  rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full  rounded-full "
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </motion.div>

            <div className="relative w-full px-4 z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    <p className="text-[20px] text-gray-500 max-w-2xl mx-auto">
                        Our streamlined setup process gets you up and running quickly, so you can focus on growing your
                        business.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-center"
                                variants={itemVariants}
                                whileHover={{scale: 1.05}}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg"
                                    animate={floatingAnimation}
                                >
                                    <step.icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-center">{step.description}</p>

                                {/* Connection Line */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="hidden md:block absolute top-8 left-[60%] w-full h-[2px]  origin-left"
                                        initial={{scaleX: 0}}
                                        animate={{scaleX: 1}}
                                        transition={{delay: 0.5, duration: 0.8}}
                                    >
                                        <motion.div
                                            animate={{x: [0, 100, 0]}}
                                            transition={{duration: 2, repeat: Infinity}}
                                            className="absolute -top-1 h-4 w-4"
                                        >
                                            <ArrowRight className="text-purple-400" />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.8, duration: 0.6}}
                >
                    <motion.button
                        className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        data-aos="fade-right"
                    >
                        Get Started Now
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default ProcessSection;
