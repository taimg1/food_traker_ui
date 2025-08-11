import { type FoodAnalysisResponse } from "../service/type.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UploadService} from "../service/upload.service.ts";
import {HttpClient} from "../../../libs/HttpClient.ts";


// Константи для типів дій
export enum UploadSlice {
    upload = 'upload/uploadFile',
    reset = 'upload/reset'
}

type UploadState = {
    data: FoodAnalysisResponse | null;
    isLoading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: UploadState = {
    data: null,
    isLoading: false,
    error: null,
    success: false,
};

// Функція для створення сервісу з сигналом
const createUploadService = (signal?: AbortSignal) => {
    return new UploadService(new HttpClient({baseURL:import.meta.env.VITE_API_BASE_URL, timeout:50000},signal));
};

export const uploadFileAction = createAsyncThunk<FoodAnalysisResponse, File>(
    UploadSlice.upload,
    async (file, {signal}) => {
        const uploadService = createUploadService(signal);
        return await uploadService.uploadFile(file);
    });



const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        resetUploadState: (state) => {
            state.data = null;
            state.isLoading = false;
            state.error = null;
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadFileAction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.success = false;
                state.data = null;
            })
            .addCase(uploadFileAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.success = true;
            })
            .addCase(uploadFileAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Не вдалося завантажити та проаналізувати зображення';
                state.success = false;
            });
    },
});

export const {resetUploadState} = uploadSlice.actions;
export default uploadSlice.reducer;
