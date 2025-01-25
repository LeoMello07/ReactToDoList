import React from 'react';
import {View, Text, Image, Pressable, TextInput} from 'react-native';
import {styles} from './styles';
import {CirclesSplash} from '../../Icons/icons';

export const Registration = () => {
  return (
    <View style={styles.container}>
      <View style={{top: 0, left: 0, width: '100%', position: 'absolute'}}>
        <CirclesSplash />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}> Welcome to Onboard!</Text>
        <Text style={styles.subtitle}>Let's help to meet up your tasks.</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={[styles.input, styles.placeholderText]}
          placeholder="Enter your full name"
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={[styles.input, styles.placeholderText]}
          placeholder="Enter your Email"
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={[styles.input, styles.placeholderText]}
          placeholder="Enter Password"
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={[styles.input, styles.placeholderText]}
          placeholder="Confirm password"
          placeholderTextColor="#A0A0A0"
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 16}}> Already have an account? </Text>
        <Text style={{color: '#50C2C9', fontSize: 16}}>Sign In</Text>
      </View>
    </View>
  );
};
