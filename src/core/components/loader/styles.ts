import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  outerPulse: {
    width: 50,
    height: 50,
    backgroundColor: Colors.BLUE,
    borderRadius: 100,
    bottom: 50,
    alignSelf: 'center'
  },
  innerPulse: {
    width: 50,
    height: 50,
    backgroundColor: Colors.BLUE,
    borderRadius: 100,
    alignSelf: 'center'
  }
});
