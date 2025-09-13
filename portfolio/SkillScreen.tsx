import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AVATAR = require('./assets/icon.png'); // Use your avatar image here

const skills = [
  { name: 'React Native', level: 'Avançado' },
  { name: 'JavaScript', level: 'Avançado' },
  { name: 'TypeScript', level: 'Intermediário' },
  { name: 'Node.js', level: 'Intermediário' },
  { name: 'UI/UX Design', level: 'Básico' },
];

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      <Image source={AVATAR} style={styles.avatar} />
      <Text style={styles.name}>Seu Nome</Text>
      <Text style={styles.title}>Árvore de Habilidades</Text>
      <View style={styles.skills}>
        {skills.map((skill) => (
          <View key={skill.name} style={styles.skillItem}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <Text style={styles.skillLevel}>{skill.level}</Text>
          </View>
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
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  skills: {
    width: '80%',
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  skillName: {
    fontSize: 18,
  },
  skillLevel: {
    fontSize: 18,
    color: '#0077b6',
  },
});
