import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos,setTodos]=useState([
    {
      key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Drinking Milk',
    },
    {
      key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Learning mobile app',
    },
    {
      key: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Reading books',
    },
  ])

  const pressHandler=id=>{
    const newList=todos.filter((item)=>item.key!==id)
    setTodos(newList)
  }

  const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
  );
  const renderItem = ({ item }) => (
      <TodoItem item={item} pressHandler={pressHandler} />
  );
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
        <FlatList
            data={todos}
            renderItem={renderItem}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40,
    flex:1
  },
  list:{
    marginTop:20,
    flex:1
  }
});
