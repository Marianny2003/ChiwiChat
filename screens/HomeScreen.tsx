import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import NavHead from '../components/NavHead';
import Container from '../components/Container';

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <NavHead navigation={navigation} />
     
      <BottomNavBar navigation={navigation} />
    </Container>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 10,
  },
  cardTop: {
    marginTop: -65,
  },
});
