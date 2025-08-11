// @ts-nocheck
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/useReduxHooks.ts";
import {uploadFileAction, resetUploadState} from "../store/analyse.slice";
import {type FoodAnalysisResponse} from "../service/type";


export const useUpload = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state: { upload: { data: FoodAnalysisResponse | null } }) => state.upload.data);
    const isLoading = useAppSelector((state: { upload: { isLoading: boolean } }) => state.upload.isLoading);
    const error = useAppSelector((state: { upload: { error: string | null } }) => state.upload.error);
    const success = useAppSelector((state: { upload: { success: boolean } }) => state.upload.success);

    const uploadFile = useCallback(async (
        file: File,
        onSuccess?: (analysisResult: FoodAnalysisResponse) => void
    ) => {
        try {
            const response = await dispatch(uploadFileAction(file));
            if (uploadFileAction.fulfilled.match(response)) {
                onSuccess?.(response.payload);
                return response.payload;
            } else {
                throw new Error(response.error?.message || "Аналіз зображення не вдався");
            }
        } catch (err) {
            console.error("Помилка при завантаженні зображення:", err);
            throw err;
        }
    }, [dispatch]);

    const resetState = useCallback(() => {
        dispatch(resetUploadState());
    }, [dispatch]);

    return {
        data,
        isLoading,
        error,
        success,
        uploadFile,
        resetState
    };
};
