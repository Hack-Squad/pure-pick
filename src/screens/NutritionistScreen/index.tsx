import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import {GoogleGenerativeAI} from '@google/generative-ai';
import ThemedBox from '../../components/ThemedBox';
import Icon from 'react-native-vector-icons/MaterialIcons';

function NutritionistScreen() {
  const [messages, setMessages] = useState<any>([]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    setMessages((prevMessages: any) => [
      ...prevMessages,
      {user: true, text: userInput},
    ]);
    setUserInput('');
    const apiKey = 'AIzaSyAuo2XlZITGX5VCvnxmtL2qSLODMHeOjfU';
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});
      const result = await model.generateContent(userInput);
      const response = await result.response;
      const text = response.text();
      setMessages((prevMessages: any) => [
        ...prevMessages,
        {user: false, text: text},
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages: any) => [
        ...prevMessages,
        {user: false, text: 'Error: Could not send message'},
      ]);
    }
  };

  const Message = ({item}: any) => {
    return (
      <View
        style={[
          styles.messageContainer,
          item.user ? styles.userMessageContainer : styles.aiMessageContainer,
        ]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <ThemedBox style={styles.container}>
      <Text style={styles.intro}>
        Hello ! I'll help you with any questions you might have about the
        ingredients in the product. What would you like to know?
      </Text>
      <FlatList
        style={styles.list}
        data={messages}
        renderItem={({item}) => <Message item={item} />}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type your message..."
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Icon name="send" color={'#303030FF'} size={30} />
        </TouchableOpacity>
      </View>
    </ThemedBox>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEFFF',
    paddingVertical: 10,
  },
  intro: {
    backgroundColor: '#EDFF8C99',
    borderRadius: 24,
    fontSize: 16,
    lineHeight: 26,
    padding: 15,
    marginBottom: 25,
  },
  list: {
    width: '100%',
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 14,
    color: '#171a1fff',
    padding: 8,
  },
  inputContainer: {
    backgroundColor: '#FFFFFFFF',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#F3F4F6FF',
    borderRadius: 12,
  },

  messageContainer: {
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessageContainer: {
    backgroundColor: '#F8F9FAFF',
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
  aiMessageContainer: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    marginRight: 'auto',
  },
  messageText: {
    fontSize: 14,
    color: '#000',
    padding: 10,
  },
});

export default NutritionistScreen;
