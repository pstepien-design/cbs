//
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import HomeScreen from './screens/HomeScreen';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import chatReducer from './store/reducers/chat.reducers';
import { StackParamList } from './typings/navigations';
import ReduxThunk from 'Redux-Thunk';
import userReducer from './store/reducers/user.reducers';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ChatStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Screen1' component={Screen1} />
      <Stack.Screen name='Screen2' component={Screen2} />
      <Stack.Screen name='Screen3' component={Screen3} />
    </Stack.Navigator>
  );
}

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Home' component={HomeScreen} />
          {/* <Tab.Screen name="Discover" component={DiscoverScreen} /> */}
          <Tab.Screen name='Chat' component={ChatStackNavigator} />
          {/* <Tab.Screen name="Menu" component={MenuScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
