import React, { useState } from 'react';
import {
    Alert,
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';


const Todo = () => {

    // Initialisation des variables d'état
    const [tache, setTache] = useState('');
    const [dataTasks, setDataTasks] = useState([]);

    // Fonction saveTask pour enregistrer une tâche
    const saveTask = () => { 

        console.log('Valeur TextInput : ', tache); // affichage de la tâche saisie
        
        // On vérifie que la tâche n'est pas vide
        if (tache === '') { 
            Alert.alert('Erreur', 'Veuillez entrer une tâche');
            return;
        }; // fin de la vérification

        // Formatage d'une tâche (c'est un objet)
        const newTask = {
            id : Date.now().toString(), // identifiant unique
            task : tache, // texte de la tâche
            complete : false, // statut de la tâche
        }; // fin du formatage

        console.log(newTask); // affichage de la nouvelle tâche

        // Ajout de la nouvelle tâche au tableau de tâches
        setDataTasks([...dataTasks, newTask]);

        // Vider le formulaire
        setTache('');

    }; // fin de la Fonction saveTask

    // Supprimer une tâche
    const deleteTask = (id) => {
        setDataTasks(dataTasks.filter(item => item.id !== id));
    }; // fin de la fonction deleteTask

    // Marquer une tâche comme terminée
    const toggleTask = (id) => {
        setDataTasks(dataTasks.map(item => item.id === id ? { ...item, complete: !item.complete } : item ));
    }; // fin de la fonction toggleTask

    // Début du rendu d'une tâche
    const renderTask = ({ item }) => { 
        return (<View>
            <TouchableOpacity 
                style={styles.taskTextContainer}
                onPress={() => toggleTask(item.id)}
            >
                <Text style={[ styles.taskText, item.completedTask && styles.completedTask]}>
                    {item.task}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(item.id)}
            >
                <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
        </View>)
    } // Fin du rendu d'une tâche

    return (
        <View style={styles.content}>
            <View>
                <Text style={styles.title}>Mon Gestionnaire de Tâches</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={tache}
                    style={styles.textInput}
                    onChangeText={setTache}
                    placeholder="Saisir une tâche..." />
                <Button 
                    title='Ajouter' 
                    color='green'
                    onPress={saveTask} />
            </View>
            <View>
                <FlatList 
                    data={dataTasks}
                    renderItem={renderTask}
                    keyExtractor={item => item.id}
                    
                    
                />
            </View>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({


    completedTask: {
        textDecorationLine: 'line-through',
        color: '#999',
    },

    container : {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
    },

    content : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
    },

    counter: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
    },

    deleteButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff4444',
        borderRadius: 15,
    },

    deleteText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#999',
    },

    header: {
        padding: 20,
        backgroundColor: '#6200ee',
        alignItems: 'center',
    },
    
    input : {
        flex: 1,
        height: 50,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },

    inputContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 20,
    },

    list: {
        flex: 1,
    },

    taskContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    taskText: {
        fontSize: 16,
        color: '#333',
    },

    taskTextContainer: {
        flex: 1,
    },

    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#D1D1D1', // Gris doux
        borderRadius: 8,       // Coins arrondis
        paddingHorizontal: 15, // Espacement interne du texte
        backgroundColor: '#FFFFFF'
    },
    
    title : {
        color : 'green',
        fontSize : 24,
        fontWeight : '600',
        padding : 10,
    }
})