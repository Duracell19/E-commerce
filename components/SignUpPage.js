import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View, Text, TouchableOpacity, ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as RNLocalize from 'react-native-localize';
import signUpPageStyles from './styles/signUpPageStyles';
import * as Colors from './colors/brandingColors';
import { setI18nConfig, translate } from '../translations/translationHelper';
import * as Actions from '../actions/signUpActions';
import * as TranslationKeys from '../translations/translationKeys';
import * as ReducersDefinitions from '../models/constants/reducersDefinitions';
import * as Pages from '../models/constants/pagesDefines';
import SimpleTextInput from './controls/simpleTextInput';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  onChangedFullNameTextInput = (textInput) => {
    const { actions } = this.props;
    actions.saveFullName(textInput);
  }

  onChangedEmailTextInput = (textInput) => {
    const { actions } = this.props;
    actions.saveMail(textInput);
  }

  onChangedPasswordTextInput = (textInput) => {
    const { actions } = this.props;
    actions.savePassword(textInput);
  }

  onChangedConfirmPasswordTextInput = (textInput) => {
    const { actions } = this.props;
    actions.saveConfirmPassword(textInput);
  }

  goToLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(Pages.LOG_IN_PAGE);
  };

  signUp = () => {

  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  renderTextInput(placeholder, textInputType) {
    switch (textInputType) {
      case ReducersDefinitions.FULL_NAME:
        return (
          <SimpleTextInput
            placeholder={placeholder}
            isSecure={false}
            textChanged={this.onChangedFullNameTextInput}
          />
        );
      case ReducersDefinitions.EMAIL_ADDRESS:
        return (
          <SimpleTextInput
            placeholder={placeholder}
            isSecure={false}
            textChanged={this.onChangedEmailTextInput}
          />
        );
      case ReducersDefinitions.PASSWORD:
        return (
          <SimpleTextInput
            placeholder={placeholder}
            isSecure
            textChanged={this.onChangedPasswordTextInput}
          />
        );
      case ReducersDefinitions.CONFIRM_PASSWORD:
        return (
          <SimpleTextInput
            placeholder={placeholder}
            isSecure
            textChanged={this.onChangedConfirmPasswordTextInput}
          />
        );
      default:
        return (<View />);
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={signUpPageStyles.contentContainer}>
        <LinearGradient
          colors={[Colors.Gradient1, Colors.Gradient2]}
          style={signUpPageStyles.gradient}
        >
          <TouchableOpacity onPress={this.goBack}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={23}
              style={signUpPageStyles.leftArrow}
            />
          </TouchableOpacity>
          <View style={signUpPageStyles.signUpPage}>
            <Text style={signUpPageStyles.title}>
              {`${translate(TranslationKeys.ECOMMERCE)}\n${translate(TranslationKeys.STORE)}`}
            </Text>
            <View style={signUpPageStyles.divider50} />
            {this.renderTextInput(translate(TranslationKeys.FULL_NAME),
              ReducersDefinitions.FULL_NAME)}
            {this.renderTextInput(translate(TranslationKeys.EMAIL_ADDRESS),
              ReducersDefinitions.EMAIL_ADDRESS)}
            {this.renderTextInput(translate(TranslationKeys.PASSWORD),
              ReducersDefinitions.PASSWORD)}
            {this.renderTextInput(translate(TranslationKeys.CONFIRM_PASSWORD),
              ReducersDefinitions.CONFIRM_PASSWORD)}
            <View style={signUpPageStyles.inputsContainer}>
              <View style={signUpPageStyles.divider15} />
              <TouchableOpacity
                style={signUpPageStyles.signUpButton}
                onPress={this.signUp}
              >
                <Text style={signUpPageStyles.signUpButtonTitle}>
                  {
                    translate(TranslationKeys.SIGN_UP)
                  }
                </Text>
              </TouchableOpacity>
            </View>
            <View style={signUpPageStyles.divider15} />
            <TouchableOpacity onPress={this.goToLogin}>
              <Text style={signUpPageStyles.alreadyHaveAccountText}>
                {translate(TranslationKeys.ALREADY_HAVE_ACCOUNT_SIGN_IN)}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  fullName: state.signUp.fullName,
  mail: state.signUp.mail,
  password: state.signUp.password,
  confirmPassword: state.signUp.confirmPassword
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
