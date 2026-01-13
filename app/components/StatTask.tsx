import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from '../(tabs)/styles'


const StatTask = () => {
    // Lecture des tâches dans le store
    const todos = useSelector((state) => state.task)

    console.log("todos", todos)

    return (
        <View>
            {todos.length > 0 && (
                <Text style={styles.counter}>
                    {todos.filter((t) => !t.completed).length} tâche(s) restante(s)
                </Text>
            )}
        </View>
    )
}

export default StatTask