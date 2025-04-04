import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Info {
  label?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  error?: string;
  icon?: string;
  iconError?: string;
  isPassword?: boolean;
}

export default function Input(props: Info) {
  const [isFocused, setIsFocused] = useState(false);
  const [secureText, setSecureText] = useState(props.isPassword || false);

  const handleFocus = () => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(props.value || '');
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(props.value || '');
    }
  };

  return (
    <View style={styleInput.container}>
      <View style={styleInput.textLabel}>
        {props.icon && <FontAwesome name={props.icon} size={24} color="#6A0DAD" />}
        {props.label && <Text style={styleInput.label}>{props.label}</Text>}
      </View>

      <View style={[styleInput.inputContainer, isFocused && styleInput.focusedInputContainer]}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor="#aaa"
          onBlur={handleBlur}
          onFocus={handleFocus}
          secureTextEntry={secureText}
          style={styleInput.campo}
          underlineColorAndroid="transparent" // Elimina el borde negro en Android
        />

        {props.isPassword && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <FontAwesome
              name={secureText ? 'eye-slash' : 'eye'}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styleInput.textLabel}>
        {props.iconError && <FontAwesome name={props.iconError} size={16} color="#df0000" />}
        {props.error && <Text style={styleInput.error}>{props.error}</Text>}
      </View>
    </View>
  );
}

const styleInput = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  textLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#6A0DAD',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  focusedInputContainer: {
    borderBottomColor: '#6A0DAD', // Color al enfocar
  },
  campo: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 8,
    borderWidth: 0, // Elimina cualquier borde adicional
    outlineStyle: 'none', // Evita borde negro en Web
  },
  error: {
    color: '#df0000',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 8,
  },
});