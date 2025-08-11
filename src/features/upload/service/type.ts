export interface Ingredient {
  name: string;
  estimated_weight_grams: number;
}

export interface NutritionalInfo {
  calories_kcal: number;
  protein_g: number;
  fats_g: number;
  carbohydrates_g: number;
}

export interface FoodAnalysisResponse {
  dish_name: string;
  estimated_total_weight_grams: number;
  ingredients: Ingredient[];
  total_nutritional_info: NutritionalInfo;
  health_recommendations: string;
  possible_allergens: string[];
}

export interface UploadImg {
  image: File;
}
