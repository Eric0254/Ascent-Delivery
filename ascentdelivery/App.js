import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carros from './Carros';
import AUDIR8 from './AUDiR8';
import MERCEDESG63 from './MERCEDESG63';
import BMWI8 from './BMWI8';
import LamborghiniUrus from './LamborghiniUrus';
import Porsche911 from './Porsche911';
import InternoBMW from './InternoBMW';
import InternoPorsche911 from './InternoPorsche911';
import InternoAUDIR8 from './InternoAUDIR8';
import InternoMERCEDESG63 from './InternoMERCEDESG63';
import InternoLamborghini from './InternoLamborghini';
import PaymentScreen from './PaymentScreen';
import Pagamentos from './Pagamentos';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/564x/55/88/ed/5588ed463a7e801a9a27fc49fe878a88.jpg',
        }}
      />
      <View style={styles.overlay}>
        <Text style={styles.logo}>Ascent</Text>
        <View style={styles.content}>
          <Text style={styles.title}>Carros de luxo na sua porta.</Text>
          <Text style={styles.subtitle}>
            Alugue os últimos modelos de carros a preços baixos.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Carros')}
          >
            <Text style={styles.buttonText}>Let's Go!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Carros" component={Carros} />
        <Stack.Screen name="InternoBWM" component={InternoBMW}/>
        <Stack.Screen name="InternoPorsche911" component={InternoPorsche911}/>
        <Stack.Screen name="InternoAUDIR8" component={InternoAUDIR8} />
        <Stack.Screen name="InternoMERCEDESG63" component={InternoMERCEDESG63} />
        <Stack.Screen name="InternoLamborghini" component={InternoLamborghini} />
        <Stack.Screen name="LamborghiniUrus" component={LamborghiniUrus} />
        <Stack.Screen name="BMWI8" component={BMWI8} />
        <Stack.Screen name="Porsche911" component={Porsche911} />
        <Stack.Screen name="AUDiR8" component={AUDIR8} />
        <Stack.Screen name="MERCEDESG63" component={MERCEDESG63} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="Pagamentos" component={Pagamentos} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute', 
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 20,
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    position: 'absolute', 
    top: 20,
    right: 20,
  },
  content: {
    position: 'absolute', 
    bottom: 20,
    left: 20,
    right: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    marginLeft: '30%',
    width: '40%',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;