import React from 'react';
import { motion } from 'framer-motion';
import { type AnimationVariant } from '../types/animation.types';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    animationVariant: AnimationVariant;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, animationVariant }) => {
    return (
        <motion.div
            variants={animationVariant}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </motion.div>
    );
};

export default FeatureCard;
