import {motion, AnimatePresence} from "framer-motion";
import {useState, useEffect} from "react";

const words = ["Consultation", "Strategy", "Innovation", "Excellence"];

export const RotatingText = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-8 relative">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -20, opacity: 0}}
                    transition={{duration: 0.5}}
                    className="bg-gradient-to-t from-gray-400 via-sky-800 to-pink-500 bg-clip-text text-transparent font-bold"
                >
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};
