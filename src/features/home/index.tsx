
import CallToActionSection from './components/CallToActionSection';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';

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
            <HeroSection buttonHover={buttonHover} />

            {/* Features Section */}
            <FeaturesSection
                fadeIn={fadeIn}
                slideUp={slideUp}
                staggerContainer={staggerContainer}
            />

            {/* How It Works Section */}
            <HowItWorksSection
                fadeIn={fadeIn}
                slideUp={slideUp}
                slideRight={slideRight}
                slideLeft={slideLeft}
            />

            {/* Testimonials Section */}

            {/* CTA Section */}
            <CallToActionSection
                fadeIn={fadeIn}
                slideUp={slideUp}
                staggerContainer={staggerContainer}
                buttonHover={buttonHover}
            />
        </div>
    );
};

export default HomePage;
