import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
  );
  const renderItem = ({ item }) => (
      <Item title={item.title} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Name & Age</Text>
      </View>
      <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
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
