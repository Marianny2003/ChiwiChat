import { useState } from "react";

export const useValidarVacioNombre = () => {
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState('');
  const validar = () => {
    if (!nombre || nombre.trim() === "") {
      setError("El campo no puede estar vacío!");
    } else {
      setError(null);
    }
  };

  const resetErrorNombre =()=>{
    setError("");
  };

  return [nombre, setNombre, error, validar, resetErrorNombre];
};

export const useValidarVacioApellido = () => {
  const [error, setError] = useState(null);
  const [apellido, setApellido] = useState('');
  const validar = () => {
    if (!apellido || apellido.trim() === "") {
      setError("El campo no puede estar vacío!");
    } else {
      setError(null);
    }
  };

  const resetErrorApellido =()=>{
    setError("");
  };

  return [apellido, setApellido, error, validar, resetErrorApellido];
};


export const useValidarEmail = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  const validar = () => {
    if (!email || email.trim() === "") {
      setError("El correo electrónico no puede estar vacío!");
    } else {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!regex.test(email)) {
        setError("El formato del correo electrónico es incorrecto!");
      } else {
        setError(null);
      }
    }
  };

  const resetErrorEmail =()=>{
    setError("");
  };

  return [email, setEmail, error, validar, resetErrorEmail];
};


export const useValidarUsuario = () => {
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState("");

  const validar = () => {
    if (!usuario || usuario.trim() === "") {
      setError("El usuario no puede estar vacío!");
    } else if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(usuario)) {
      setError("Debe tener entre 6 y 10 caracteres, incluir una mayúscula y un número.");
    } else {
      setError(null);
    }
  };

  const resetErrorUsuario = () => {
    setError("");
  };

  return [usuario, setUsuario, error, validar, resetErrorUsuario];
};

