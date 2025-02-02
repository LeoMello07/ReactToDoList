import React from 'react';
import {View, Text, Image, Pressable, TextInput} from 'react-native';
import {styles} from './styles';
import {CirclesSplash} from '../../Icons/icons';

export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{top: 0, left: 0, width: '100%', position: 'absolute'}}>
        <CirclesSplash />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}> Welcome back</Text>
         <Image
            source={require('../../Images/welcomeBack.png')}
            style={styles.image}
            resizeMode="cover"
        />
      </View>
      <View style={styles.inputsContainer}>
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
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{color: '#50C2C9', fontSize: 16}}>Forget password?</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 16}}> Don't have an account? </Text>
        <Text style={{color: '#50C2C9', fontSize: 16}}>Sign Up</Text>
      </View>
    </View>
  );
};
