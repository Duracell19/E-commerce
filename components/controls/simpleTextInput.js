import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';
import signUpPageStyles from '../styles/signUpPageStyles';

class SimpleTextInput extends PureComponent {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    const { textChanged } = this.props;
    textChanged(text);
  }

  render() {
    const { placeholder, isSecure } = this.props;

    return (
      <TextInput
        style={signUpPageStyles.textInput}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        onChangeText={this.onChangeText}
      />
    );
  }
}

export default (SimpleTextInput);
