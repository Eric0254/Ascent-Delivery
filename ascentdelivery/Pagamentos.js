import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Picker,
} from 'react-native';

const Pagamentos = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setMessage('');
    // Realizar a chamada à API para processar o pagamento
    setMessage('Pagamento realizado com sucesso!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >

        <ScrollView>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          onChangeText={setName}
          value={name}
        />

        <TextInput
          style={styles.input}
          placeholder="Número de Celular"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Realizar Pagamento</Text>
        </TouchableOpacity>

        {message && <Text style={styles.message}>{message}</Text>}
      </ScrollView>
    </KeyboardAvoidingView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
 input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 15,
    marginBottom: 10,
 },
 button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
 },
 buttonText: {
    color: '#FFF',
    fontSize: 18,
 },
 message: {
    fontSize: 16,
    color: 'green',
 },
});

export default Pagamentos;