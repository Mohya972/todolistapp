import React from 'react'
import { View } from 'react-native'
import { styles } from '../(tabs)/styles'
import FormADD from '../components/FormADD'
import Header from '../components/Header'
import List from '../components/List'

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormADD />
      
      <View>
        <List />
      </View>

      
      
    </View>
  )
}

export default index

