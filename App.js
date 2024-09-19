import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';


import logo from './assets/logo.png';
import { useState } from 'react';


export default function App() {

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');

  function Calcular() {
    if(alcool && gasolina) {
      if(alcool /gasolina < 0.7 ) {
        alert('Vale mais a pena compra ÁLCOOL!') 
      } else {
        alert('Vale mais a pena compra GASOLINA!') 
      }
    } else{
      alert('Informe os valores de Álcool e Gasolina!') 
    }
  }

  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo}/>

      <Text style={styles.title}>
        Qual é a melhor opção?
      </Text>

      <Text style={styles.label}>
        Ácool (preço por litro)
      </Text>

      <TextInput 
        placeholder='Álcool' 
        keyboardType='numeric'
        placeholderTextColor= '#969595'
        style={styles.preco} 
        onChangeText={(alcool) => setAlcool(alcool)}
        />

      <Text style={styles.label}>
        Gasolina (preço por litro)
      </Text>

      <TextInput 
        placeholder='Gasolina' 
        keyboardType='numeric'
        placeholderTextColor= '#969595'
        style={styles.preco} 
        onChangeText={setGasolina}
        />

      <Button 
        color='#db9e04'
        title='Calcular'
        onPress={Calcular} 
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{ 
    color:'#fff',
    fontSize: 25,
    marginBottom: 30,
    fontWeight: '700',
},
  label: {
    color: '#fff',
    marginBottom: 6,
    fontSize: 18,
    fontWeight: '400',
  },

  preco:{
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
  },

  logo:{
    width: 180,
    height: 180,
    marginBottom: 50,
  }
});
