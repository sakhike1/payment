import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {CheckCircle} from "lucide-react";
import SubscribeButton from "../components/SubscribeButton";
import {RotatingText} from "../components/RotatingText";

export const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        if (isSubscribed) {
            const timer = setTimeout(() => {
                setIsSubscribed(false);
                setEmail("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSubscribed]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubscribed(true);
        setIsLoading(false);
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            className="font-[sans-serif] mt-10 px-6 py-16 bg-gradient-to-t from-gray-100 via-purple-300 to-gray-50"
        >
            <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
                <motion.div
                    initial={{scale: 0.5}}
                    animate={{scale: 1}}
                    transition={{duration: 0.5}}
                    className="flex items-center justify-center gap-2 mb-4"
                ></motion.div>

                <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">
                    Expert Services Tailored for Your Success <RotatingText />
                </h2>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} className="mt-8">
                    <p className="text-base text-gray-500 leading-relaxed">
                        Join our community of forward-thinking professionals. Get exclusive insights, industry updates,
                        and strategic guidance delivered directly to your inbox.
                    </p>
                </motion.div>

                <div className="relative h-[60px] mt-12">
                    <AnimatePresence mode="wait">
                        {!isSubscribed ? (
                            <motion.form
                                key="subscribe-form"
                                onSubmit={handleSubmit}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                className="absolute inset-0 bg-white flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full outline-none bg-white pl-4 text-gray-800 text-sm"
                                    required
                                />
                                <SubscribeButton isLoading={isLoading} onClick={() => {}} />
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success-message"
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.8}}
                                className="absolute inset-0 flex items-center justify-center gap-2 text-green-600"
                            >
                                <CheckCircle className="animate-bounce" />
                                <span>Thank you for subscribing!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default Subscribe;
