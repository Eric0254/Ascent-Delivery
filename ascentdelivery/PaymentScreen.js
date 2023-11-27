import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PaymentScreen = ({navigation}) => {
  const imageUrl = 'https://static.vecteezy.com/ti/vetor-gratis/p1/1946031-banco-cartao-prototipo-com-abstrato-onda-fundo-abstrato-banco-abstrato-sistema-de-pagamento-the-best-illustration-of-the-credit-cards-on-the-internet-vetor.jpg';

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <TextInput placeholder="CARDHOLDER NAME" style={styles.input} />
      <TextInput placeholder="Numero de validade" style={styles.input} />
      <TextInput placeholder="CVC" style={styles.input} />
      <Button title="Salvar Dados" onPress={() => navigation.navigate('Pagamentos')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default PaymentScreen;