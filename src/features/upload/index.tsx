import { motion } from 'framer-motion';
import UploadForm from './components/UploadForm';

const UploadPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-blue-50 to-emerald-50 py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Аналіз калорійності <span className="text-emerald-600">страв</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Завантажте фото вашої страви, і ми миттєво проаналізуємо її склад, калорійність та поживну цінність
          </motion.p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-emerald-500 to-blue-600 p-8 text-white flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Як це працює?</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0 mr-4">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Завантажте фото</h3>
                      <p className="text-emerald-100">Зробіть фото страви або виберіть наявне зображення з вашого пристрою</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0 mr-4">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Миттєвий аналіз</h3>
                      <p className="text-emerald-100">Наш штучний інтелект аналізує зображення та визначає інгредієнти та їх кількість</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0 mr-4">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Отримайте результати</h3>
                      <p className="text-emerald-100">Ми покажемо детальну інформацію про калорійність, білки, жири та вуглеводи</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-2 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Точність розпізнавання більше 95%</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-2 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Результати за кілька секунд</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-2 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Більше 10,000 розпізнаваних страв</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 p-4 md:p-8">
              <UploadForm />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>
            Food Tracker © 2025 — Сучасний інструмент для аналізу харчування
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UploadPage;
