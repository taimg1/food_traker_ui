import React from 'react';
import { motion, type Easing } from 'framer-motion';

interface AnimatedBackgroundCircleProps {
    className: string;
    animation: {
        x: number[];
        y: number[];
    };
    transition: {
        repeat: number;
        duration: number;
        ease: Easing | Easing[];
        delay?: number;
    };
}

const AnimatedBackgroundCircle: React.FC<AnimatedBackgroundCircleProps> = ({ className, animation, transition }) => {
    return (
        <motion.div
            animate={animation}
            transition={transition}
            className={className}
        ></motion.div>
    );
};

export default AnimatedBackgroundCircle;
