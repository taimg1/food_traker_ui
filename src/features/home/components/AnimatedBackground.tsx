import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-200 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute top-32 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl"
            />
        </div>
    );
};

export default AnimatedBackground;
