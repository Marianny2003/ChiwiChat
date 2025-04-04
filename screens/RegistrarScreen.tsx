import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Input from '../components/Input';
import Botton from '../components/Botton';
import { FontAwesome5 } from '@expo/vector-icons';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useValidarVacioNombre, useValidarVacioApellido, useValidarEmail, useValidarUsuario} from '../hooks/useValidacion';

export default function RegistrarScreen({ navigation }) {
    const[nombre, setNombre, ErrorNombre, validarNombre, resetNombre]= useValidarVacioNombre();
    const[apellido, setApellido, ErrorApellido, validarApellido, resetApellido]=useValidarVacioApellido();
    const[usuario, setUsuario, ErrorUsuario, validarUsuario, resetUsuario]= useValidarUsuario();
    const[email, setEmail, ErrorEmail, validarEmail, resetEmail]=useValidarEmail();

    const handleNombreChange = (text) => {
        setNombre(text);
        validarNombre();  
        if (nombre && !ErrorNombre) {
          resetNombre();
        }
      };

      const handleApellidoChange = (text) => {
        setApellido(text);
        validarApellido();  
        if (apellido && !ErrorApellido) {
          resetApellido();
        }
      };

      const handleUsuarioChange = (text) => {
        setUsuario(text);
        validarUsuario();  
        if (usuario && !ErrorUsuario) {
          resetUsuario();
        }
      };

      const handleEmailChange = (text) => {
        setEmail(text);
        validarEmail();  
        if (email && !ErrorEmail) {
          resetEmail();
        }
      };
    
      const handleRegistrar = () => {
        validarNombre();
        validarApellido();
        validarEmail();
        validarUsuario();
      
        if (nombre && apellido && usuario && email && !ErrorNombre && !ErrorApellido && !ErrorUsuario && !ErrorEmail) {
          setNombre('');
          setApellido('');
          setUsuario('');
          setEmail('');
      
          showMessage({
            message: 'Registro Exitoso!',
            description: 'Usuario creado exitosamente!',
            type: 'success',
          });

          setTimeout(() => {
            navigation.navigate('LoginScreen'); 
          }, 2000);
          
        } else {
          showMessage({
            message: 'Error de Datos!',
            description: 'Por favor ingresa todos los campos correctamente.',
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

      <Text style={styles.subtitle}>Registrar Usuario</Text>
      
      {/* Contenedor para Nombre y Apellido */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Input label="Nombre" icon='id-card' placeholder='Ingresa tu nombre' value={nombre} onChangeText={handleNombreChange} error={ErrorNombre} iconError={ErrorNombre ? 'warning' : null} />
        </View>
        <View style={styles.inputContainer}>
          <Input label="Apellido" icon='id-card' placeholder='Ingresa tu apellido' value={apellido} onChangeText={handleApellidoChange} error={ErrorApellido} iconError={ErrorApellido ? 'warning' : null}/>
        </View>
      </View>

      <Input label="Nombre de Usuario" icon='user' placeholder='Ingresa tu usuario' value={usuario} onChangeText={handleUsuarioChange} error={ErrorUsuario} iconError={ErrorUsuario ? 'warning' : null} />
      <Input label="Correo Electrónico" icon='envelope' placeholder='Ingresa tu correo' value={email} onChangeText={handleEmailChange} error={ErrorEmail} iconError={ErrorEmail ? 'warning' : null}/>

      <Botton title="Registrar" onPress={handleRegistrar} />

      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.forgotPasswordText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10%',
    justifyContent: 'center',  
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
    position: 'absolute', 
    top: 20,
    left: 20,
  },
  logoContainer: {
    justifyContent: 'center',  
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 100,
    height: 70,
  },
  subtitle: {
    fontSize: 20,
    color: '#808080',
    marginBottom: 30,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1, 
    marginHorizontal: 5, 
  },
});
