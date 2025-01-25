import {Button, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F3',
  },
  image: {
    width: 254,
    height: 194,
  },
  content: {
    paddingHorizontal: 25,
    marginTop: 65,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    // fontFamily: 'Poppins',
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    width: 180,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 31,
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
  inputsContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 25,
    gap: 30,
    width: '100%',
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 13,
    color: '#000000',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  placeholderText: {
    fontSize: 13,
  },
  footer: {},
});
