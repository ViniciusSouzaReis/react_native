import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleClick = (text: string):void => {
    if (text.length > 0) {
      setShowWelcome(true) 
    } else {
      alert('Digite seu nome')
    }
    
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder='Digite seu nome' 
        underlineColorAndroid='transparent' 
        onChangeText={(text) => setInputValue(text) }
      />

      {showWelcome && (<Text style={styles.text}>Bem vindo {inputValue}!!</Text>)}
     
      <Button 
        title="Entrar" 
        onPress={ (text) => handleClick(inputValue) }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 60,
    fontSize: 20,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  }
});
