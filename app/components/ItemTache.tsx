import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../(tabs)/styles';


const ItemTache = () => {
    // Déclaration de la variable d'état 
    const [tasks, setTasks] = useState([]);

    // Fonction qui modifie une tâche
    const toggleTask = (id) => {
    setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );
    };

    // Fonction qui efface une tâche
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Fonction qui affiche les tâches
    const renderTodo = ({ item }) => (
        <View style={styles.todoItem}>
            <TouchableOpacity
                style={styles.checkbox}
                onPress={() => toggleTodo(item.id)}
            >
                <View
                    style={[
                        styles.checkboxInner,
                    item.completed && styles.checkboxChecked,
                    ]}
                >
                    {item.completed && <Text style={styles.checkmark}>✓</Text>}
                </View>
            </TouchableOpacity>
    
            <Text
                style={[
                    styles.todoText,
                    item.completed && styles.todoTextCompleted,
                ]}
            >
                {item.title}
            </Text>
    
            <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteTodo(item.id)}
            >
                <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            {tasks.length === 0 ? (
                <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
                ) : (
                    <FlatList
                        data={tasks}
                        renderItem={renderTodo}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                    />
                )}
        </View>
    )
}

export default ItemTache