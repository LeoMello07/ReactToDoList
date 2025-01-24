import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './styles';
import {CirclesSplash} from '../../Icons/icons';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{top: 0, left: 0, position: 'absolute'}}>
        <CirclesSplash />
      </View>
      <View style={{marginTop: 78}}>
        <Image
          source={require('../../Images/SplashScreen.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}> Gets things with TODs </Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
          Consequat urna quam felis interdum quisque. Malesuada adipiscing
          tristique ut eget sed.
        </Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> Get Started</Text>
      </Pressable>
    </View>
  );
};
