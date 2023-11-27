import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BMWI8 from './BMWI8';

const Stack = createNativeStackNavigator();

const Carros = ({ navigation }) => {
  const carros = [
    {
      imagem: 'https://s2-autoesporte.glbimg.com/hLB50VllvQBqvfn-Cdn_IeM8BuU=/0x0:2400x1638/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/k/F/b2vtMYTgqUaA122iyCYg/bmw-i8-roadster-8.jpg',
      modelo: 'InternoBWM',
      nome: 'BWMI8',
      preco: 'R$ 500 Por Dia',
    },
    {
      imagem: 'https://cdn.motor1.com/images/mgl/xqZoAk/s3/2023-audi-r8-v10-gt-rwd.webp',
      modelo: 'InternoAUDIR8',
      nome: 'AUDIR8',
      preco: 'R$ 500 Por Dia',
    },
    {
      imagem: 'https://i0.wp.com/quatrorodas.abril.com.br/wp-content/uploads/2020/08/Inkas-Mercedes-AMG-G63-Limo-8-e1597943948778.jpg?resize&quality=70&strip=info&w=1024&ssl=1',
      modelo: 'InternoMERCEDESG63',
      nome: 'MERCEDESG83',
      preco: 'R$ 600 Por Dia',
    },
    {
      imagem: 'https://www.williamloughran.co.uk//media/7257/lamborghini-urus-80204-1.jpg?anchor=center&mode=crop&width=1400&height=675&rnd=133023647630000000',
      modelo: 'InternoLamborghini',
      nome: 'LamborghiniUrus',
      preco: 'R$ 600 Por Dia',
    },
    {
      imagem: 'https://s3.ecompletocarros.dev/images/lojas/285/veiculos/165413/veiculoInfoVeiculoImagesMobile/vehicle_image_1700254019_d41d8cd98f00b204e9800998ecf8427e.jpeg',
      modelo: 'InternoPorsche911',
      nome: 'Porsche911',
      preco: 'R$ 400 Por Dia',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('/assets/Logo.png')} />
      <Text style={styles.subtitulo}>CARROS DE LUXO</Text>

      {carros.map((carro) => (
        <View style={styles.card} key={carro.modelo}>
          <Image source={{ uri: carro.imagem }} style={styles.imagem} />
          <Text style={styles.texto}>{carro.nome}</Text>
          <Text style={styles.texto}>{carro.preco}</Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate(carro.modelo)}
          >
            <Text style={styles.botaoTexto}>ALUGAR</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 120,
    height: 80,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitulo: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#888',
    marginTop: 30,
    marginLeft: 10,
    marginBottom: -50,
  },
  card: {
    width: '90%',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  imagem: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    marginTop: 5,
  },
  botao: {
    width: '30%',
    height: '20%',
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Carros;
