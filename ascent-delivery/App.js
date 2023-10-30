import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let's Go!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    borderRadius: 10,
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