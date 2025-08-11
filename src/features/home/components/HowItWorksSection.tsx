import { motion } from 'framer-motion';
import AnimatedBackgroundCircle from './AnimatedBackgroundCircle';
import StepItem from './StepItem';
import { type AnimationVariant } from '../types/animation.types';

interface HowItWorksSectionProps {
    fadeIn: AnimationVariant;
    slideUp: AnimationVariant;
    slideRight: AnimationVariant;
    slideLeft: AnimationVariant;
}

const HowItWorksSection = ({ fadeIn, slideUp, slideRight, slideLeft }: HowItWorksSectionProps) => {
    return (
        <div className="relative bg-gradient-to-r from-emerald-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

            {/* Decorative elements */}
            <AnimatedBackgroundCircle
                className="absolute -right-16 top-1/4 w-32 h-32 bg-emerald-300 rounded-full opacity-10"
                animation={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <AnimatedBackgroundCircle
                className="absolute -left-16 bottom-1/4 w-48 h-48 bg-blue-300 rounded-full opacity-10"
                animation={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.h2
                    variants={slideUp}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 relative"
                >
                    <span className="relative z-10">Як це працює</span>
                    <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-24 h-2 bg-emerald-200 rounded-full"></span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector line for desktop */}
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="hidden md:block absolute top-24 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-1 bg-emerald-200"
                    ></motion.div>

                    <StepItem
                        number={1}
                        title="Завантажте фото"
                        description="Зробіть фото вашої страви або завантажте наявне зображення через додаток."
                        animationVariant={slideRight}
                        showConnector={true}
                        delay={0.5}
                    />

                    <StepItem
                        number={2}
                        title="Аналіз зображення"
                        description="Наша система використовує ШІ для аналізу фото та точного визначення калорійності страви."
                        animationVariant={slideUp}
                        showConnector={true}
                        delay={0.7}
                    />

                    <StepItem
                        number={3}
                        title="Отримайте результати"
                        description="Переглядайте детальну інформацію про калорійність, білки, жири та вуглеводи страви."
                        animationVariant={slideLeft}
                        showConnector={false}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default HowItWorksSection;
