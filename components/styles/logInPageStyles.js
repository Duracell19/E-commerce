import { StyleSheet } from 'react-native';
import * as Colors from '../colors/brandingColors';

const logInPageStyles = StyleSheet.create({
  gradient: { flex: 1 },
  loginPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'column'
  },
  divider15: {
    marginBottom: 15
  },
  divider70: {
    marginBottom: 70
  },
  loginPageTopView: {
    alignItems: 'center',
    padding: 30,
  },
  loginPageInputsContainer: {
    marginTop: 15,
    alignSelf: 'stretch'
  },
  loginPageBottomContainerView: {
    alignSelf: 'stretch'
  },
  loginPageBottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 15,
  },
  title: { textAlign: 'center', fontSize: 40, color: Colors.Blue1 },
  textInput: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.Black,
    margin: 5,
    borderBottomWidth: 0.8,
    fontSize: 20
  },
  forgotPasswordText: {
    fontSize: 20,
    textAlign: 'right',
    color: Colors.Blue2
  },
  signInButton: { height: 45, backgroundColor: Colors.Blue3, justifyContent: 'center' },
  signInButtonTitle: { color: Colors.White, fontSize: 20, textAlign: 'center' },
  lineStyle: {
    borderWidth: 1,
    borderColor: Colors.White,
    margin: 10,
  },
  skipLoginText: {
    fontSize: 25,
    color: Colors.Blue3
  },
  rightArrow: {
    marginLeft: 15,
  }
});

export default logInPageStyles;
