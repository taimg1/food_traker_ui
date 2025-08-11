import { motion } from 'framer-motion';
import { type AnimationVariant } from '../types/animation.types';

interface StepItemProps {
    number: number;
    title: string;
    description: string;
    animationVariant: AnimationVariant;
    showConnector?: boolean;
    delay?: number;
}

const StepItem = ({ number, title, description, animationVariant, showConnector = false, delay = 0.5 }: StepItemProps) => {
    return (
        <motion.div
            variants={animationVariant}
            className="flex flex-col items-center relative"
        >
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg relative z-10">
                {number}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>

            {/* Mobile connector */}
            {showConnector && (
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay }}
                    viewport={{ once: true }}
                    className="md:hidden h-12 w-1 bg-emerald-200 mt-6"
                ></motion.div>
            )}
        </motion.div>
    );
};

export default StepItem;
