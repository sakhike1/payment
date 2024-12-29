import React from 'react';
import { useSpring, animated } from 'react-spring';

const HeaderCard = ({ headerText, children }) => {
    const props = useSpring({
        to: { opacity: 1, transform: 'translateY(0)' },
        from: { opacity: 0, transform: 'translateY(-20px)' },
        config: { tension: 170, friction: 15 },
    });

    return (
        <animated.div style={props} className="header-card max-w-md mx-auto p-6 border rounded-xl shadow-lg bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">{headerText}</h2>
            <div className="text-gray-200">
                {children}
            </div>
        </animated.div>
    );
};

export default HeaderCard;