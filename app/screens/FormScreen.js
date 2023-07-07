import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const FormScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Title'/>
      <TextInput  style={[styles.textInput,styles.textArea]} multiline placeholder='Body'/>
      <TouchableOpacity onPress={()=>{navigation.navigate("List")}} style={styles.addBtn}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingTop:10,
    flex:1
  },
  addText:{
    color:"#fff",
    textAlign:"center",
    fontSize:18,
  },
  addBtn:{
    backgroundColor:"red",
    padding:15,
    borderRadius:10,
    marginTop:20    
  },
  textInput:{
    backgroundColor:"#fff",
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  textArea:{
    height:150,
  }
})