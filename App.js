import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
 const [people,setPeople]=useState([
   {name:'ram',age:15},
   {name:'ran',age:16},
   {name:'rak',age:17},
   {name:'rav',age:18},
     {name:'ram',age:15},
     {name:'ran',age:16},
     {name:'rak',age:17},
     {name:'rav',age:18},
     {name:'ram',age:15},
     {name:'ran',age:16},
     {name:'rak',age:17},
     {name:'rav',age:18},

 ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Name & Age</Text>
      </View>
        <ScrollView>
      {
        people.map((item)=>{
         return(
             <View key={item.age} style={styles.body}>
               <Text>{item.name} present age is {item.age}!!!</Text>
             </View>
         )
        })
      }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    padding:10
  },
  body:{
    padding:1.5,
      borderWidth:2,
      backgroundColor: 'pink',
      height:50,
      margin:5
  }
});
