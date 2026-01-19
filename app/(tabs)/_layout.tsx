import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import Products from '../components/ecommerce/Products'
import { store } from '../store/store'

const index = () => {
  return (
    <GestureHandlerRootView>

      <Provider store={store}>
        <Products />
      </Provider>
    </GestureHandlerRootView>
  )
}

export default index

