import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { type AnimationVariant } from '../types/animation.types';

interface FeaturesSectionProps {
    fadeIn: AnimationVariant;
    slideUp: AnimationVariant;
    staggerContainer: AnimationVariant;
}

const FeaturesSection = ({ fadeIn, slideUp, staggerContainer }: FeaturesSectionProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
            <motion.h2
                variants={slideUp}
                className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 relative"
            >
                <span className="relative z-10">Наші переваги</span>
                <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-24 h-2 bg-emerald-200 rounded-full"></span>
            </motion.h2>
            <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
            >
                <FeatureCard
                    title="Розпізнавання їжі"
                    description="Завантажте фото вашої страви, і наша система розпізнає її та визначить калорійність."
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    }
                    animationVariant={slideUp}
                />
                <FeatureCard
                    title="Детальна статистика"
                    description="Отримуйте детальні звіти про вживані калорії, баланс білків, жирів та вуглеводів."
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    }
                    animationVariant={slideUp}
                />
                <FeatureCard
                    title="Історія харчування"
                    description="Зберігайте історію харчування та відстежуйте прогрес на шляху до здорового способу життя."
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                    animationVariant={slideUp}
                />
            </motion.div>
        </motion.div>
    );
};

export default FeaturesSection;
