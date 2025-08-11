import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const slideUp = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10
            }
        }
    };

    const slideRight = {
        hidden: { x: -60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10
            }
        }
    };

    const slideLeft = {
        hidden: { x: 60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10
            }
        }
    };

    const buttonHover = {
        // @ts-ignore Тимчасово ігноруємо помилку типізації анімації для тестової версії на продакшн
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 10
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 via-blue-50 to-emerald-50 overflow-hidden">
            {/* Hero Section with animated background */}
            <div className="relative w-full py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center overflow-hidden">
                {/* Animated Background Elements */}
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

            {/* Features Section */}
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
                    <motion.div
                        variants={slideUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="bg-gradient-to-br from-emerald-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Розпізнавання їжі</h3>
                        <p className="text-gray-600 text-center">Завантажте фото вашої страви, і наша система розпізнає її та визначить калорійність.</p>
                    </motion.div>

                    <motion.div
                        variants={slideUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="bg-gradient-to-br from-emerald-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Детальна статистика</h3>
                        <p className="text-gray-600 text-center">Отримуйте детальні звіти про вживані калорії, баланс білків, жирів та вуглеводів.</p>
                    </motion.div>

                    <motion.div
                        variants={slideUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="bg-gradient-to-br from-emerald-100 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Історія харчування</h3>
                        <p className="text-gray-600 text-center">Зберігайте історію харчування та відстежуйте прогрес на шляху до здорового способу життя.</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* How It Works Section */}
            <div className="relative bg-gradient-to-r from-emerald-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

                {/* Decorative elements */}
                <motion.div
                    animate={{
                        x: [0, 10, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                    }}
                    className="absolute -right-16 top-1/4 w-32 h-32 bg-emerald-300 rounded-full opacity-10"
                ></motion.div>
                <motion.div
                    animate={{
                        x: [0, -10, 0],
                        y: [0, 10, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    className="absolute -left-16 bottom-1/4 w-48 h-48 bg-blue-300 rounded-full opacity-10"
                ></motion.div>

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

                        <motion.div
                            variants={slideRight}
                            className="flex flex-col items-center relative"
                        >
                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg relative z-10">1</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Завантажте фото</h3>
                            <p className="text-gray-600 text-center">Зробіть фото вашої страви або завантажте наявне зображення через додаток.</p>
                            {/* Mobile connector */}
                            <motion.div
                                initial={{ scaleY: 0, originY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="md:hidden h-12 w-1 bg-emerald-200 mt-6"
                            ></motion.div>
                        </motion.div>

                        <motion.div
                            variants={slideUp}
                            className="flex flex-col items-center relative"
                        >
                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg relative z-10">2</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Аналіз зображення</h3>
                            <p className="text-gray-600 text-center">Наша система використовує ШІ для аналізу фото та точного визначення калорійності страви.</p>
                            {/* Mobile connector */}
                            <motion.div
                                initial={{ scaleY: 0, originY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                viewport={{ once: true }}
                                className="md:hidden h-12 w-1 bg-emerald-200 mt-6"
                            ></motion.div>
                        </motion.div>

                        <motion.div
                            variants={slideLeft}
                            className="flex flex-col items-center relative"
                        >
                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg relative z-10">3</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Отримайте результати</h3>
                            <p className="text-gray-600 text-center">Переглядайте детальну інформацію про калорійність, білки, жири та вуглеводи страви.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Testimonials Section */}

            {/* CTA Section */}
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
                            <Link
                                to="/register"
                                className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-emerald-200/50 text-lg block"
                            >
                                <span className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Створити обліковий запис
                                </span>
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={slideUp}
                            whileHover={buttonHover}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/login"
                                className="backdrop-blur-sm bg-white/80 text-emerald-700 border-2 border-emerald-500 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-md hover:shadow-emerald-100/50 text-lg block"
                            >
                                <span className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Увійти
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomePage;
