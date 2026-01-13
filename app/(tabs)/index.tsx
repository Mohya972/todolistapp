import React from 'react'
import { View } from 'react-native'
import { styles } from '../(tabs)/styles'
import Header from '../components/Header'
import TemplateTask from '../components/TemplateTask'

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TemplateTask />
    </View>
  )
}

export default index

