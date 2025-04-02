import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CameraButton from '../components/CameraButton';
import MessageScreen from '../components/MessageScreen';
import SettingsScreen from '../components/SettingsScreen';
import { NavigationProps } from '../navigation/types';
import SettingsButton from '../components/SettingsButton';
import MessageButton from '../components/MessageButton';
import { Alert } from 'react-native';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleLanguagePress = () => {
    Alert.alert("Select Language", "This feature is not implemented yet.", [{ text: "OK" }]);
  };
  const nav = () => navigation.navigate('Message');
  const handleclick = () =>{
    handleLanguagePress();
    nav();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ISHARACHAT</Text>
      <Text style={styles.body}>WELCOME!</Text>
      <View style={styles.buttonContainer}>
        <CameraButton onPress={() => navigation.navigate('Camera')} />
        <View style={styles.bottomButtons}>
          <MessageButton onPress={handleclick} />


          <SettingsButton onPress={() => navigation.navigate('Settings')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ed',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom:29,
    paddingLeft:110,
    marginTop:25,


  },
  body:{
    fontSize:19,
    paddingLeft:138,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop:50,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 30,
  },
});

export default HomeScreen;