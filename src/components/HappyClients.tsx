import { motion } from 'framer-motion';
import ai from "../assets/ai.jpg";

const PaymentSystem = () => {
    

    return (
        <div className="payment-system pb-20">
            <div className="grid md:grid-cols-2 mt-20 items-center md:gap-8 gap-6 font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto">
                <motion.div 
                    className="max-md:order-1 max-md:text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { 
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0.8, ease: "easeOut" }
                        }
                    }}
                >
                    <motion.h2 
                        className="md:text-4xl text-3xl md:leading-10 font-extrabold text-gray-800 mb-4"
                       
                    >
                        Streamline Your Payments
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-base text-gray-600 leading-relaxed"
                        
                    >
                        Experience secure, fast, and reliable payment solutions designed for both businesses and
                        individuals. Manage transactions effortlessly with our state-of-the-art system.
                    </motion.p>
                    <button
                        className="bg-purple-600 text-white mt-5 px-8 py-3 hover:shadow-2xl rounded-full hover:bg-purple-700 
                           transform transition-all duration-300 hover:scale-105  
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Start now 
                    </button>
                    </motion.div>
               
                <motion.div 
                    className="md:h-[400px]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={{
                        initial: { opacity: 0, x: 20 },
                        animate: { 
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0.8, ease: "easeOut" }
                        }
                    }}
                >
                    <motion.img
                        src={ai}
                        className="w-[1000px] h-[350px] object-cover rounded-lg shadow-xl mx-auto hover:shadow-2xl transition-shadow duration-300"
                        alt="Payment System Overview"
                        
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default PaymentSystem;