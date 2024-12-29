import {motion} from "framer-motion";
import {Send} from "lucide-react";

interface SubscribeButtonProps {
    isLoading: boolean;
    onClick: () => void;
}

export const SubscribeButton = ({isLoading, onClick}: SubscribeButtonProps) => {
    return (
        <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="border border-purple-600 focus:outline-none   text-gray-600 rounded-full px-6 py-2.5 flex items-center gap-2"
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <motion.div
                    animate={{rotate: 360}}
                    transition={{duration: 1, repeat: Infinity, ease: "linear"}}
                    className="w-5 h-5  rounded-full"
                />
            ) : (
                <>
                    Subscribe
                    <Send size={16} />
                </>
            )}
        </motion.button>
    );
};

export default SubscribeButton;
