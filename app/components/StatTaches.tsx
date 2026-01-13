import React from 'react'
import { Text, View } from 'react-native'

const StatTaches = () => {
    return (
        <View>
            <Text>StatTaches</Text>
            {todos.length > 0 && (
                    <Text style={styles.counter}>
                        {todos.filter((t) => !t.completed).length} tâche(s) restante(s)
                    </Text>
            )}
        </View>
    )
}

export default StatTaches

