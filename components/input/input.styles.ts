import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
      width: '40%'
  }
});