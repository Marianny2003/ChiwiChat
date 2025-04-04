import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Input from '../components/Input';
import Botton from '../components/Botton';
import { FontAwesome5 } from '@expo/vector-icons';
import useProfile from '../hooks/useProfile';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useValidarUsuario } from '../hooks/useValidacion';

export default function LoginScreen({ navigation }) {
  const { profile } = useProfile();
  const [usuario, setUsuario, ErrorUsuario, validarUsuario, resetUsuario] = useValidarUsuario();

  const handleUsuarioChange = (text) => {
    setUsuario(text);
    validarUsuario();  
    if (usuario && !ErrorUsuario) {
      resetUsuario();
    }
  };

  const handleLogin = () => {
    validarUsuario();
    if (usuario && !ErrorUsuario) {
      if (usuario == profile.usuario) {
        navigation.navigate('Home');
        setUsuario(''); 
        resetUsuario();
      } else {
        showMessage({
          message: 'Error de Usuario o Contraseña!',
          description: 'Ingrese los Datos Correctamente.',
          type: 'danger',
        });
      }
    } else {
      showMessage({
        message: 'Error de Datos!',
        description: 'Ingrese los Datos Correctamente.',
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>ChiwiChat</Text>
             <FontAwesome5
                name="comment-dots" 
                size={28} 
                color="#0066ff" 
                style={styles.ayuda}
              />

      {/* Logo centrado en la pantalla */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.icon} />
      </View>

      <Text style={styles.subtitle}>¡Bienvenido a Chiwichat, la mejor forma de chatear!</Text>
      <Input label="Usuario" icon='user' placeholder='Ingresa tu usuario' value={usuario} onChangeText={handleUsuarioChange}  error={ErrorUsuario} iconError={ErrorUsuario ? 'warning' : null}/>

      <Botton title="Ingresar" onPress={handleLogin}/>

      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('RegistrarScreen')}>
        <Text style={styles.forgotPasswordText}>Abrir Cuenta Nueva</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10%',
    justifyContent: 'center',  // Centra los elementos verticalmente
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
    position: 'absolute',  // Posiciona el texto de bienvenida en la parte superior izquierda
    top: 20,
    left: 20,
  },
  logoContainer: {
    justifyContent: 'center',  // Centra el logo en el contenedor
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 140,
    height: 100,
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    marginBottom: 20,
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#0066CC',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  ayuda: {
    position: 'absolute', 
    top: 20,
    right: 20,
  },
});
