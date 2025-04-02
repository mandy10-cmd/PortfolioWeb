import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';

const SettingsScreen: React.FC = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  const handleLanguagePress = () => {
    Alert.alert(
      "Select Language",
      "This feature is not implemented yet.",
      [{ text: "OK" }]
    );
  };

  const handleAboutPress = () => {
    Alert.alert(
      "About",
      "Indian Sign Language Translator\nVersion 1.0.0\n\nDeveloped by Mandar",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Enable Notifications</Text>
          <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Dark Mode</Text>
          <Switch value={isDarkModeEnabled} onValueChange={toggleDarkMode} />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <TouchableOpacity style={styles.button} onPress={handleLanguagePress}>
          <Text style={styles.buttonText}>Language Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Info</Text>
        <TouchableOpacity style={styles.button} onPress={handleAboutPress}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#6495ed',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f0fff0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#006400',
  },
  rowText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#006400',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SettingsScreen;