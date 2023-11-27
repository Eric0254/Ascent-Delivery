import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

const Carrinho = ({navigation}) => {
  const [carrinho, setCarrinho] = React.useState({
    carro: {
      nome: 'Porche 911',
      preco: 450,
      imagem: 'https://images.dealer.com/ddc/vehicles/2020/Porsche/911/Coupe/perspective/front-left/2019_76.png',
    },
    aluguel: {
      dias: 8,
      total: 3100,
      taxa: 350,
    },
  });


  return (
    <View style={styles.container}>
      <View style={styles.carro}>
        <Text style={styles.titulo}>Carro:</Text>
        <Image style={styles.imagem} source={{ uri: carrinho.carro.imagem }} />
        <Text style={styles.nome}>{carrinho.carro.nome}</Text>
        <Text style={styles.value}>R${carrinho.carro.preco}</Text>
        <View style={styles.linhaDivisao} />
        <Text style={styles.dias}>Dias: {carrinho.aluguel.dias}</Text>
        <Text style={styles.preco}>Preço: R$3100</Text>
        <Text style={styles.taxa}>Taxa: R${carrinho.aluguel.taxa}</Text>
        <View style={styles.linhaDivisao} />
        <Text style={styles.total}>Total: R${carrinho.aluguel.total + carrinho.aluguel.taxa}.00</Text>
        <Text style={styles.titulo1}>Locação</Text>
        <Text style={styles.loja}>Av. Europa, 587 - Jardim Europa, São Paulo - SP</Text>
      </View>

      <Button
        style={styles.botao}
        title="CONFIRMAR"
        color="#ff0000"
        onPress={() => navigation.navigate('PaymentScreen')}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    margin: 10,
    marginRight: 250,
    top: 10
  },
   titulo1: {
    fontSize: 24,
    margin: 10,
    marginRight: 20,
    marginTop: 80 
   },
  carro: {
    width: 400,
    height: 600,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 20,
    marginRight: 150
  },
  nome: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 5,
    position: 'absolute',
    marginLeft: 130,
    top: 65
  },
   linhaDivisao: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginVertical: 20,
    marginTop: 10
  },
  preco: {
    fontSize: 14,
    margin: 5,
    color: 'black',
    marginRight: 230,
    marginTop: 20
  },
  value: {
    fontSize: 14,
    margin: 5,
    color: 'red',
    position: 'absolute',
    top: 86,
    marginLeft: 130
  },
  dias: {
    fontSize: 14,
    margin: 5,
    marginRight: 270,
  },
  total: {
    fontSize: 14,
    margin: 5,
    color: 'black',
    marginRight: 210
  },
  taxa: {
    fontSize: 14,
    margin: 5,
    marginRight: 240,
    marginTop: 20
  },
  botao: {
    width: 300,
    height: 50,
    margin: 10,
  },
  loja: {
    fontSize: 14,
    margin: 5,
  },
});

export default Carrinho;
