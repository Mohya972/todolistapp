import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.content} >
      <Text style={styles.title} > Index </Text>
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  content : {
    flex : 1,
    backgroundColor : '#6dd168',
    alignItems : 'center'
  },

  title : {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})