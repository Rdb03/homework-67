import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoorLockState {
    value: string;
    showMessage: boolean;
}

const initialState: DoorLockState = {
    value: '',
    showMessage: false,
};

export const doorLockSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        enterNumber: (state, action: PayloadAction<string>) => {
            if (state.value.length < 4 && !state.showMessage) {
                state.value += action.payload;
            }
        },
        deleteNumber: (state) => {
            if (!state.showMessage) {
                state.value = state.value.slice(0, -1);
            }
        },
        enter: (state) => {
            if (state.value === '2835') {
                state.showMessage = true;
                state.value = 'ACCESS ALLOWED';
                return;
            } else {
                state.showMessage = true;
                state.value = 'ACCESS DENIED';
                return;
            }
        },
        clear: (state) => {
            if (state.showMessage) {
                state.showMessage = false;
                state.value = '';
            }
        },
    },
});

export const doorLockReducer = doorLockSlice.reducer;

export const {
    enterNumber,
    enter,
    deleteNumber,
    clear,
} = doorLockSlice.actions;

