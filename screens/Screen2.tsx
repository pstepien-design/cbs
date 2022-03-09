import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Screen2({ navigation }: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      <Button title='Go to Screen1' onPress={()=> navigation.navigate('Screen1')}/> 4
      
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
