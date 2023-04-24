import {
    combineReducers,
    configureStore,
    ThunkAction,
    Action,
    PreloadedState,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export const store = setupStore();
export const getStore = () => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
