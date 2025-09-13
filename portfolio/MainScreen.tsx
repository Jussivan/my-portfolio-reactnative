import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const AVATAR = require('./assets/icon.png'); // Use your avatar image here

const links = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/seu-usuario' },
  { label: 'GitHub', url: 'https://github.com/seu-usuario' },
  { label: 'Email', url: 'mailto:seu@email.com' },
];

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Image source={AVATAR} style={styles.avatar} />
      <Text style={styles.name}>Seu Nome</Text>
      <View style={styles.links}>
        {links.map((item) => (
          <TouchableOpacity key={item.label} onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.link}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  links: {
    width: '80%',
  },
  link: {
    fontSize: 18,
    color: '#0077b6',
    marginBottom: 12,
    textAlign: 'center',
  },
});
