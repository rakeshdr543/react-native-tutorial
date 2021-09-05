import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const [name,setName]=useState('raki')
  const [age,setAge]=useState()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Enter name:-</Text>
        <TextInput multiline style={styles.input} onChangeText={(v)=>setName(v)}  />
      </View>
      <View style={styles.body}>
        <Text>Enter age:-</Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={(v)=>setAge(v)}  />
        <Text>{name} present age is {age}!!!</Text>
      </View>
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
  input:{
    borderWidth:1.5
  }
});
