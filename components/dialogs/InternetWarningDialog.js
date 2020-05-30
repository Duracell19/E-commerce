import React, { Component } from 'react';
import {
  View, Text, Modal, TouchableOpacity
} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { setI18nConfig, translate } from '../../translations/translationHelper';
import internetWarningStyles from '../styles/internetWarningStyles';
import * as TranslationKeys from '../../translations/translationKeys';
import * as Colors from '../colors/brandingColors';

class InternetWarningDialog extends Component {
  constructor(props) {
    super(props);
    setI18nConfig();
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onTryAgain = this.onTryAgain.bind(this);
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  onCloseModal() {
    const { modalClosed } = this.props;
    modalClosed();
  }

  onTryAgain() {
    const { tryAgainPressed } = this.props;
    tryAgainPressed();
  }

  render() {
    const { isModalVisible, isTryAgainVisible } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={this.onCloseModal}
      >
        <View style={internetWarningStyles.centeredContentView}>
          <View style={internetWarningStyles.modalView}>
            <FontAwesomeIcon
              icon={faInfoCircle}
              color={Colors.Orange}
              size={60}
            />
            <View style={internetWarningStyles.verticalSeparatedView} />
            <Text style={internetWarningStyles.title}>
              {
                translate(TranslationKeys.INTERNET_CONNECTION)
              }
            </Text>
            <View style={internetWarningStyles.verticalSeparatedView} />
            <Text style={internetWarningStyles.description}>
              {
                translate(TranslationKeys.FAILED_TO_CONNECT)
              }
            </Text>
            <View style={internetWarningStyles.verticalSeparatedView} />
            <View style={{ flexDirection: 'row' }}>
              <View style={{
                opacity: isTryAgainVisible ? 1 : 0.0,
                width: isTryAgainVisible ? 120 : 0.0
              }}
              >
                <TouchableOpacity
                  style={internetWarningStyles.button}
                  onPress={this.onTryAgain}
                >
                  <Text style={internetWarningStyles.buttonTitle}>
                    {
                      translate(TranslationKeys.TRY_AGAIN)
                    }
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: isTryAgainVisible ? 20 : 0 }} />
              <TouchableOpacity
                style={internetWarningStyles.button}
                onPress={this.onCloseModal}
              >
                <Text style={internetWarningStyles.buttonTitle}>
                  {
                    translate(TranslationKeys.CLOSE)
                  }
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default (InternetWarningDialog);
