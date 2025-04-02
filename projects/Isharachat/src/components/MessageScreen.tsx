import React, { useState } from 'react';
import { Alert, TouchableOpacity, View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const MessageScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  
  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isUser: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      setTimeout(() => {
        const responseMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'This is a simulated response',
          isUser: false,
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages(prevMessages => [...prevMessages, responseMessage]);
      }, 1000);
    }
  };

  function renderMessage({ item }: { item: Message }) {
    return (
      <View style={styles.messageRow}>
        {!item.isUser}
        <View style={[styles.messageBubble, item.isUser ? styles.userMessage : styles.botMessage]}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        {item.isUser}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          maxLength={100}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messageList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 20,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  languageButton: {
    alignSelf: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  languageButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default MessageScreen;
