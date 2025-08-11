import { useForm } from 'react-hook-form';
import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import FileInput from './FileInput';
import { useUpload } from '../hooks/useUpload';
import { type FoodAnalysisResponse } from '../service/type';

type FormValues = {
  foodImage: File;
};

const UploadForm = () => {
  const { control, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormValues>();
  const { uploadFile, data, isLoading, error, success, resetState } = useUpload();

  // Очищаємо стан при розмонтуванні компонента
  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  const onSubmit = useCallback(async (formData: FormValues) => {
    if (!formData.foodImage) return;

    try {
      await uploadFile(formData.foodImage);
    } catch (error) {
      console.error('Помилка при завантаженні:', error);
    }
  }, [uploadFile]);

  const handleReset = useCallback(() => {
    reset();
    resetState();
  }, [reset, resetState]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-emerald-700 mb-8 text-center"
      >
        Аналіз їжі за фото
      </motion.h1>

      {!success ? (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8"
        >
          <FileInput
            name="foodImage"
            control={control}
            label="Завантажте фото страви"
            errorMessage="Будь ласка, виберіть зображення їжі для аналізу"
            rules={{ required: "Зображення обов'язкове" }}
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading || isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-3 px-6 rounded-xl font-semibold shadow-md disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Аналізуємо...
              </span>
            ) : "Аналізувати страву"}
          </motion.button>
        </motion.form>
      ) : null}

      {/* Секція з результатами аналізу */}
      {success && data && (
        <FoodAnalysisResult data={data} onReset={handleReset} />
      )}

      {/* Повідомлення про помилку */}
      {error && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
        >
          <p className="font-medium">Виникла помилка</p>
          <p className="text-sm">{error}</p>
          <button
            onClick={resetState}
            className="mt-2 text-sm text-red-700 underline"
          >
            Спробувати знову
          </button>
        </motion.div>
      )}
    </div>
  );
};

// Компонент для відображення результатів аналізу
const FoodAnalysisResult = ({
  data,
  onReset
}: {
  data: FoodAnalysisResponse;
  onReset: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 py-4 px-6">
        <h2 className="text-2xl font-bold text-white">{data.dish_name}</h2>
        <p className="text-emerald-100 text-sm">Загальна вага: {data.estimated_total_weight_grams}г</p>
      </div>

      <div className="p-6">
        {/* Поживна цінність */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Поживна цінність:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <NutrientCard
              label="Калорії"
              value={`${data.total_nutritional_info.calories_kcal}`}
              unit="ккал"
              color="bg-red-100 text-red-700"
            />
            <NutrientCard
              label="Білки"
              value={`${data.total_nutritional_info.protein_g}`}
              unit="г"
              color="bg-blue-100 text-blue-700"
            />
            <NutrientCard
              label="Жири"
              value={`${data.total_nutritional_info.fats_g}`}
              unit="г"
              color="bg-yellow-100 text-yellow-700"
            />
            <NutrientCard
              label="Вуглеводи"
              value={`${data.total_nutritional_info.carbohydrates_g}`}
              unit="г"
              color="bg-purple-100 text-purple-700"
            />
          </div>
        </div>

        {/* Інгредієнти */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Інгредієнти:</h3>
          <ul className="space-y-2">
            {data.ingredients.map((ingredient, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between items-center border-b border-gray-100 pb-2"
              >
                <span className="font-medium text-gray-700">{ingredient.name}</span>
                <span className="text-gray-500">{ingredient.estimated_weight_grams}г</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Рекомендації */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Рекомендації щодо здоров'я:</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-700">{data.health_recommendations}</p>
          </div>
        </div>

        {/* Алергени */}
        {data.possible_allergens.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-bold text-amber-700 mb-3">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Можливі алергени:
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.possible_allergens.map((allergen, index) => (
                <span
                  key={index}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                >
                  {allergen}
                </span>
              ))}
            </div>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold mt-4 transition-colors"
        >
          Аналізувати іншу страву
        </motion.button>
      </div>
    </motion.div>
  );
};

// Компонент для відображення карток поживної цінності
const NutrientCard = ({
  label,
  value,
  unit,
  color
}: {
  label: string;
  value: string;
  unit: string;
  color: string;
}) => {
  return (
    <div className={`${color} rounded-lg p-3 text-center`}>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xl font-bold">{value}<span className="text-sm">{unit}</span></p>
    </div>
  );
};

export default UploadForm;
