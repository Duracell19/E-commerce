import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Alert, Vibration
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RNLocalize from 'react-native-localize';
import NetInfo from '@react-native-community/netinfo';
import logInPageStyles from './styles/logInPageStyles';
import * as Colors from './colors/brandingColors';
import { saveMail, savePassword, fetchLogInToken } from '../actions/logInActions';
import { setI18nConfig, translate } from '../translations/translationHelper';
import * as TranslationKeys from '../translations/translationKeys';
import * as ReducersDefinitions from '../models/constants/reducersDefinitions';
import * as Pages from '../models/constants/pagesDefines';
import SimpleTextInput from './controls/simpleTextInput';
import InternetWarningDialog from './dialogs/InternetWarningDialog';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();

    this.state = {
      isModalVisible: false
    };
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  onModalClosed = () => {
    this.setState({
      isModalVisible: false
    });
  }

  onTryAgainPressed = () => {
    this.setState({
      isModalVisible: false
    });

    this.logIn();
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  logIn = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        const {
          mail, password, actions, navigation
        } = this.props;
        actions.fetchLogInToken(mail, password).then((token) => {
          if (token !== '' && token !== null) {
            navigation.navigate(Pages.MAIN_PAGE);
          } else {
            const errorMsg = `${translate(TranslationKeys.INVALID_LOGIN_OR_PASSWORD)} ${translate(TranslationKeys.PLEASE_TRY_AGAIN)}`;
            Alert.alert(translate(TranslationKeys.WARNING), errorMsg);
          }
        });
      } else {
        this.setState({
          isModalVisible: true
        });
        Vibration.vibrate();
      }
    });
  };

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate(Pages.SIGN_UP_PAGE);
  };

  onChangedEmailTextInput = (textInput) => {
    const { actions } = this.props;
    actions.saveMail(textInput);
  }

  onChangedPasswordTextInput = (textInput) => {
    const { actions } = this.props;
    actions.savePassword(textInput);
  }

  renderTextInput(placeholder, textInputType) {
    switch (textInputType) {
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
      default: return (<View />);
    }
  }

  render() {
    const { isModalVisible } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={logInPageStyles.contentContainer}
        >
          <LinearGradient
            colors={[Colors.Gradient1, Colors.Gradient2]}
            style={logInPageStyles.gradient}
          >
            <View style={logInPageStyles.loginPage}>
              <View style={logInPageStyles.divider15} />
              <View style={logInPageStyles.loginPageTopView}>
                <Text style={logInPageStyles.title}>
                  {`${translate(TranslationKeys.ECOMMERCE)}\n${translate(TranslationKeys.STORE)}`}
                </Text>
                <View style={logInPageStyles.divider70} />
                {this.renderTextInput(translate(TranslationKeys.EMAIL_ADDRESS),
                  ReducersDefinitions.EMAIL_ADDRESS)}
                {this.renderTextInput(translate(TranslationKeys.PASSWORD),
                  ReducersDefinitions.PASSWORD)}
                <View style={logInPageStyles.loginPageInputsContainer}>
                  <Text style={logInPageStyles.forgotPasswordText}>
                    {translate(TranslationKeys.FORGOT_PASSWORD)}
                  </Text>
                  <View style={logInPageStyles.divider15} />
                  <TouchableOpacity
                    style={logInPageStyles.signInButton}
                    onPress={this.logIn}
                  >
                    <Text style={logInPageStyles.signInButtonTitle}>
                      {
                        translate(TranslationKeys.SIGN_IN)
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={logInPageStyles.divider15} />
                <TouchableOpacity onPress={this.goToSignUp}>
                  <Text style={logInPageStyles.forgotPasswordText}>
                    {translate(TranslationKeys.NEW_HERE_SIGN_UP)}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={logInPageStyles.loginPageBottomContainerView}>
                <View style={logInPageStyles.lineStyle} />
                <View style={logInPageStyles.loginPageBottomView}>
                  <Text style={logInPageStyles.skipLoginText}>
                    {translate(TranslationKeys.SKIP_LOGIN)}
                  </Text>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    color={Colors.Blue3}
                    size={28}
                    style={logInPageStyles.rightArrow}
                  />
                  <View style={logInPageStyles.divider15} />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>

        <View style={{ position: 'absolute' }}>
          <InternetWarningDialog
            isTryAgainVisible
            isModalVisible={isModalVisible}
            modalClosed={this.onModalClosed}
            tryAgainPressed={this.onTryAgainPressed}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  mail: state.logIn.mail,
  password: state.logIn.password
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ saveMail, savePassword, fetchLogInToken }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
