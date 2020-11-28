import { StyleSheet } from 'react-native';
import { Colors } from '../../core/constants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    marginTop: 35
  },
  heading: {
    fontWeight: '700',
    marginBottom: 15
  },
  workout: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 250,
    marginBottom: 15
  },
  fab: {
    position: 'absolute',
    top: '85%',
    left: '83%',
    borderRadius: 100,
    backgroundColor: Colors.BLUE,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0.7, height: 2 },
    shadowOpacity: 0.5
  },
  fabText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 23
  },
  loader: {
    marginTop: '70%'
  }
});
