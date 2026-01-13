import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../(tabs)/styles'

const NoTask = () => {
    return (
        <View>
            <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
        </View>
    )
}

export default NoTask