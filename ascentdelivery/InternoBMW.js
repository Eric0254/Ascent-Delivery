// Importando os componentes necessários
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const InternoBMW = ({navigation}) => {
  const cars = [
    {
      name: 'BMWI8',
      price: 'R$500.00/d',
      distance: '8.7km',
      imagem: 'https://pensecarros.com.br/cms/uploads/bmw-i8-1-5-12v-hybrid-edrive-roadster-automatico-5e4def38a204f.png'
    },
    {
      name: 'Porsche911',
      modelo: 'InternoPorsche911',
      price: 'R$500.00/d',
      distance: '9.2km',
    },
    {
      name: 'MERCEDESG63',
      modelo: 'InternoMERCEDESG63',
      price: 'R$600.00/d',
      distance: '10.5km',
    },
  ];


  // Retornando o JSX do componente
  return (
    <ScrollView style={styles.container}>
      <View style={styles.car}>
        <Image source={{uri:cars[0].imagem}} style={styles.carImage} />
        <Text style={styles.carName}>{cars[0].name}</Text>
        <Text style={styles.carPrice}>{cars[0].price}</Text>
        <Text style={styles.carDistance}>{cars[0].distance}</Text>
        <View style={styles.owner}>
          <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6Tsm7egV3OWeNVA1WXHzUZ-ZASjHFatb5Ba6uOQHmgZ_aBvtNltTOU_v1EeLgfa1e80&usqp=CAU"}} style={styles.ownerImage} />
          <Text style={styles.ownerName}>Proprietário</Text>
          <Text style={styles.ownerName}>Arthur Henrique</Text>
        </View>
        <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate(cars[0].name)}
          >
          <Text style={styles.buttonText}>Alugar</Text>
          </TouchableOpacity>
      </View>
      {cars.slice(1).map((carro, index) => (
      <View style={styles.moreCars} key={index}>
        <Text style={styles.moreCarsTitle}>Mais Carros:</Text>
          <View style={styles.moreCar}>
            <View style={styles.moreCarInfo}>
              <Text style={styles.moreCarName}>{carro.name}</Text>
              <Text style={styles.moreCarPrice}>{carro.price}</Text>
              <Text style={styles.moreCarDistance}>{carro.distance}</Text>
              <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(carro.modelo)}
          >
          <Text style={styles.buttonText}>Ir</Text>
          </TouchableOpacity>
           
            </View>
          </View>
      </View>))}
    </ScrollView>
  );
};

// Definindo os estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  car: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 90
  },
  carImage: {
    width: '90%',
    height: 220,
    resizeMode: 'contain',
    borderRadius: 20,
    backgroundColor: '#e9e9e9',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 8,
    position: 'relative',
    bottom: 60,
    right: 60
  },
  carPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    position: 'relative',
    color: '#949494',
    bottom: 67,
    left: 87
  },
  carDistance: {
    fontSize: 14,
    fontWeight: 'bold',
    position: 'relative',
    color: '#949494',
    bottom: 86,
    right: 100
  },
  owner: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 8,
    backgroundColor: '#e9e9e9',
    borderRadius: 20,
    bottom: 30
  },
  ownerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  ownerName: {
    fontSize: 16,
    color: '#000',
  },
  moreCarsTitle:{
   fontSize :18,
   fontWeight:'bold', 
   color:'#fff', 
   marginVertical :8, 
   marginLeft :20
},
moreCars:{
  flex: 1,
  backgroundColor:'#565656',
  width: 250,
  alignSelf: 'center',
  borderRadius: 15,
},
moreCar:{
   flexDirection:'row', 
   alignItems:'center', 
   marginVertical :8, 
   marginHorizontal :16,   
},

moreCarInfo:{
   flex :1, 
   marginLeft :16
},
moreCarName:{
   fontSize :16, 
   fontWeight:'bold', 
   color:'#fff'
},
moreCarPrice:{
   fontSize :14, 
   color:'#fff'
},
moreCarDistance:{
   fontSize :12, 
   color:'#fff'
},
button: {
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    marginLeft: '70%',
    width: '30%',
    bottom: 50
  },
buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  button2: {
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 10,
    top: 1,
    marginVertical: 5,
    alignItems: 'center',
    width: '30%',
    bottom: 50
  },
});

// Exportando o componente
export default InternoBMW;
