import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { styles } from '../(tabs)/styles'
import FormADD from '../components/FormADD'
import Header from '../components/Header'
import List from '../components/List'
import { store } from '../store/store'

const index = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <FormADD />
        <List />
            
      </View>
    </Provider>
    
  )
}

export default index

