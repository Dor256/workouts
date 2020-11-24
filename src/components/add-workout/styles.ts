import { StyleSheet } from 'react-native';
import { Colors } from '../../core/constants';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.BLUE,
    marginTop: 15,
    borderRadius: 30,
    alignSelf: 'center',
    width: 150,
    height: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: '700',
    color: 'white'
  },
  input: {
    borderColor: 'gray',
    marginTop: 25,
    height: 40,
    width: 400,
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 2,
    padding: 7
  }
});