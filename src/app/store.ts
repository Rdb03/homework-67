import {configureStore} from "@reduxjs/toolkit";
import {doorLockReducer} from "../containers/DoorLock/doorLockSlice.ts";

export const store = configureStore({
    reducer: {
        doorLock: doorLockReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;