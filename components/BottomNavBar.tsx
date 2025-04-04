import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomNavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <FontAwesome5 name="circle-notch" size={24} color="#0066CC" />
          <Text style={styles.navLabel}>Historias</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.navButton}
        >
          <FontAwesome5 name="comments" size={24} color="#0066CC" solid />
          <Text style={styles.navLabel}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Perfil')}
        >
          <FontAwesome5 name="users" size={24} color="#0066CC" />
          <Text style={styles.navLabel}>Amigos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <FontAwesome5 name="cog" size={24} color="#0066CC" />
          <Text style={styles.navLabel}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  content: {
    fontSize: 16,
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      ios: { paddingBottom: 10 },
      android: { paddingBottom: 5 },
    }),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0066CC',
  },
});

export default BottomNavBar;
