import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Screen1({ navigation }: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Button title='Go to Screen2' onPress={()=> navigation.navigate('Screen2')}/>      
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
});
