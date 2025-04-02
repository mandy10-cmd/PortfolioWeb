import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../components/CameraScreen';
import MessageScreen from '../components/MessageScreen';
import SettingsScreen from '../components/SettingsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;