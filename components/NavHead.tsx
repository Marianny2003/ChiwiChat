import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import { useSelector } from 'react-redux'; 

export default function NavHead({ navigation }) {
  const { profileImage } = useSelector((state) => state.profile); 

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.leftSection}>
          <Image
            source={require('../assets/logo.png')} 
            style={styles.icono}
          />
          <Text style={styles.appName}>ChiwiChat</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rightSection}>
        <FontAwesome
          name="camera" 
          size={22} 
          color="#0066ff" 
          style={styles.notificationIcon}
        />
        <FontAwesome
          name="ellipsis-v" 
          size={22} 
          color="#0066ff" 
          style={styles.notificationIcon}
        />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    height: 60,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  appName: {
    fontSize: 18,
    color: '#044aa6',
    fontWeight: 'bold',
    marginLeft: 8, 
  },
  icono: {
    width: 40,
    height: 40,
  },
  notificationIcon: {
    marginRight: 16, 
  },

});