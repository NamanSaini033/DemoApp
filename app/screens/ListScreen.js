import { StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { data } from './data'

const ListScreen = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        {
          data.map(list => (
            <View key={list.it} style={styles.container1}>
              <Text style={styles.heading}>{list.title}     </Text>
              <Text style={styles.discription}>{list.body}</Text>
            </View>
          ))
        }
      </ScrollView>

      <TouchableOpacity onPress={()=>{navigation.navigate("Form")}} style={styles.addBtn}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold"

  },
  addText:{
    color:"#fff",
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    marginTop:17,
  },
  addBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width:70,
    height:70,
    backgroundColor:"red",
    borderRadius:50, shadowColor: '#171717',
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.2,
    shadowRadius: 80,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  discription: {
    borderTopWidth: 1.5,
    borderColor: "red",
    marginTop: 10,
    paddingTop: 10,
  },
  container1: {
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


})