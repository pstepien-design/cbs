import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { User } from '../entities/User';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/user.actions';

export default function HomeScreen() {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const dispatch = useDispatch();

  const singUpUser = () => {
    const user = new User(email, password);
    dispatch(signup(user.email, user.password));
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput
        onChangeText={onChangeEmail}
        value={email}
        placeholder='email'
      />
      <TextInput
        onChangeText={onChangePassword}
        secureTextEntry={true}
        value={password}
        placeholder='password'
      />
      <Button title='signup' onPress={singUpUser}></Button>
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
