import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../(tabs)/styles';

const FormADD = () => {
    // Déclaration de la variable d'état textTache
    const [textTache, setTextTache] = useState('');

    // Fonction pour ajouter une tâche
    const addTodo = () => {
        console.log('Tâche ajoutée');
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