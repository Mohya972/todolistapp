import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from '../(tabs)/styles';
import { ajouter } from '../store/slices/taskSlice';

const FormADD = () => {
    // Déclaration de la variable d'état textTache
    const [textTache, setTextTache] = useState('');

    // Fonction pour réécrire dans le store
    const dispatch = useDispatch();

    // Fonction pour ajouter une tâche
    const addTodo = () => {
        console.log('Tâche ajoutée');

        // Formattage d'une nouvelle tâche
        const newTodo = {
            id: Date.now().toString(),
            title: textTache,
            completed: false,
        };

        dispatch(ajouter(newTodo));
        console.log('newTodo :', newTodo);
        // A TERMINER !!!

    } // Fin de la fonction addTodo

    



    return (
        
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ajouter une nouvelle tâche..."
                    value={textTache}
                    onChangeText={setTextTache}
                    onSubmitEditing={addTodo}
                />
                <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
                    <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
            </View>
    )
}

export default FormADD