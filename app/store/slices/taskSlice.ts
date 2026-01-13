import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name : 'task',
    initialState : [],
    reducers : {
        ajouter : (state) => {
            console.log('ajouter une tâche')
        },
        modifier : (state) => {
            console.log('modifier une tâche')
        },
        supprimer : (state) => {
            console.log('supprimer une tâche')
        },
        
    }
});

// export des actions creators
export const { ajouter, modifier, supprimer } = taskSlice.actions;

// export du reducer counter
export default taskSlice.reducer;