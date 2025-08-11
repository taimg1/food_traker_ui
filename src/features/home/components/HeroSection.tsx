import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import type { HoverAnimation } from '../types/animation.types';

interface HeroSectionProps {
    buttonHover: HoverAnimation;
}

const HeroSection = ({ buttonHover }: HeroSectionProps) => {
    return (
        <div className="relative w-full py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center overflow-hidden">
            {/* Animated Background Elements */}
            <AnimatedBackground />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600"
                >
                    Food Tracker
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-center text-gray-700 max-w-3xl mb-10 font-light leading-relaxed"
                >
                    Відстежуйте калорійність страв та аналізуйте свій раціон
                    <span className="hidden sm:inline"> за допомогою </span>
                    <span className="sm:hidden"><br /></span>
                    <span className="font-medium text-emerald-700">фотографій</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-5 mt-8 justify-center"
                >
                    <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                        <Link
                            to="/upload"
                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-emerald-200/50 text-lg block"
                        >
                            <span className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                Завантажити фото
                            </span>
                        </Link>
                    </motion.div>
                    <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                        <Link
                            to="/dashboard"
                            className="backdrop-blur-sm bg-white/80 text-emerald-700 border-2 border-emerald-500 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-md hover:shadow-emerald-100/50 text-lg block"
                        >
                            <span className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Статистика
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
