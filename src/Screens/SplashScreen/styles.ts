import {Button, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F3',
  },
  image: {
    width: 254,
    height: 194,
  },
  content: {
    marginTop: 65,
    marginBottom: 100,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    width: 203,
  },
  button: {
    width: 340,
    height: 60,
    backgroundColor: '#50C2C9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'semibold',
  },
});
