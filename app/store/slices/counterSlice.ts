import { createSlice } from '@reduxjs/toolkit';

//  initialisation du state du reducer counter
const initialState = {
    value: 0,
};

// création du reducer counter
export const counterSlice = createSlice ({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            // incrémentation de la valeur

            console.log("cliqué");
            state.value += 1;
        },
        decrement : (state) => {
            // décrémentation de la valeur
            state.value -= 1;
        },
        reset : (state) => {
            // réinitialisation de la valeur
            state.value = 0;
        }
    }
})

// export des actions creators
export const { increment, decrement, reset } = counterSlice.actions;

// export du reducer counter
export default counterSlice.reducer;

