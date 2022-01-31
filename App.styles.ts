import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    marginTop: 30
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10
  },
  squareWrapper: {
    width: '100%',
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  square: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 100,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  }
});