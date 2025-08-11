import { combineReducers } from "redux";
import { apiSlice } from "../../hooks/useReduxHooks";
import uploadReducer from "../../features/upload/store/analyse.slice";

export const rootReducer = combineReducers({

    [apiSlice.reducerPath]: apiSlice.reducer,
    upload: uploadReducer
});

export type RootState = ReturnType<typeof rootReducer>;
