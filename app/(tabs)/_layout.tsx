import React from 'react'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { styles } from '../(tabs)/styles'
import FormADD from '../components/FormADD'
import Header from '../components/Header'
import List from '../components/List'
import { store } from '../store/store'

const index = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <View style={styles.container}>

          {/* <ExempleSwipe /> */}
          <Header />
          <FormADD />
          <List />

        </View>
      </Provider>
    </GestureHandlerRootView>
  )
}

export default index

