import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const signUpPageStyles = StyleSheet.create({
  gradient: { flex: 1, },
  leftArrow: { marginLeft: 15, marginTop: 15 },
  signUpPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'column'
  },
  divider15: {
    marginBottom: 15
  },
  divider50: {
    marginBottom: 50
  },
  title: { textAlign: 'center', fontSize: 40, color: Colors.Blue1 },
  textInput: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.black,
    margin: 5,
    borderBottomWidth: 0.8,
    fontSize: 20
  },
  inputsContainer: {
    marginTop: 15,
    alignSelf: 'stretch'
  },
  alreadyHaveAccountText: {
    fontSize: 20,
    textAlign: 'right',
    color: Colors.Blue2
  },
  signUpButton: { height: 45, backgroundColor: Colors.Blue3, justifyContent: 'center' },
  signUpButtonTitle: { color: Colors.White, fontSize: 20, textAlign: 'center' },
});

export default signUpPageStyles;
