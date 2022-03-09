import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Chatroom, Status } from '../entities/Chatroom';
import { addChatroom, toggleHappy } from '../store/actions/chat.actions';
import { StackParamList } from "../typings/navigations";


type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Screen1"
>

export default function Screen1() {
    const navigation = useNavigation<ScreenNavigationType>()
    const [title, onChangeTitle] = React.useState('');

    const isHappy = useSelector((state: any) => state.chat.isHappy)
    console.log("isHappy", isHappy);
    const dispatch = useDispatch()

  const handleAddChatroom = () =>{
    const chatroom = new Chatroom(title, Status.UNREAD, '', new Date())
    dispatch(addChatroom(chatroom))
  }

    return (
        <View style={styles.container}>
            <Text>Screen 1</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate("Screen2")} />
            <Text>{isHappy.toString()}</Text>
            <Button title="Toggle happy" onPress={() => dispatch(toggleHappy())} />
            <TextInput
            onChangeText={onChangeTitle}
            value={title}
            placeholder="Chatroom name"
            />
            <Button title="Create chatroom" onPress={() =>dispatch(handleAddChatroom)}/>
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
})