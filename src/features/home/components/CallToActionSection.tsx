import React from 'react';
import { motion } from 'framer-motion';
import LoginButton from './LoginButton';
import type { AnimationVariant, HoverAnimation } from '../types/animation.types';

interface CallToActionSectionProps {
    fadeIn: AnimationVariant;
    slideUp: AnimationVariant;
    staggerContainer: AnimationVariant;
    buttonHover: HoverAnimation;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ fadeIn, slideUp, staggerContainer, buttonHover }) => {
    return (
        <div className="relative max-w-5xl mx-auto py-24 px-6 text-center overflow-hidden">
            {/* Background blur */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.55, 0.5]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 overflow-hidden"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-emerald-100 via-blue-50 to-green-100 rounded-full opacity-50 blur-3xl"></div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="relative z-10"
            >
                <motion.h2
                    variants={slideUp}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                >
                    Почніть відстежувати свій раціон вже сьогодні
                </motion.h2>
                <motion.p
                    variants={slideUp}
                    className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                    Приєднуйтесь до тисяч користувачів, які вже покращили своє харчування з нашим додатком
                </motion.p>
                <motion.div
                    variants={staggerContainer}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.div
                        variants={slideUp}
                        whileHover={buttonHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <a
                            href="/register"
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-emerald-200/50 text-lg block"
                        >
                            <span className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Створити обліковий запис
                            </span>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={slideUp}
                        whileHover={buttonHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <LoginButton />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CallToActionSection;
