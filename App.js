import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Insane Header!</Text>
      </View>
      <View style={styles.body}>
        <Text>Insane!</Text>
        <Text>Insane!</Text>
        <Text>Insane!</Text>
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
