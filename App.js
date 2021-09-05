import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [name,setName]=useState('raki')
  const changeHandler=()=>{
    setName('Rakesh')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Insane Header! {name}</Text>
      </View>
      <View style={styles.body}>
        <Button title='Update name' onPress={changeHandler}/>
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
    backgroundColor: 'pink',
    padding:10
  },
  body:{
    backgroundColor:'yellow',
    padding: 20
  }
});
