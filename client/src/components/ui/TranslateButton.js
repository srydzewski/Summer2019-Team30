import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TRANSLATION_SERVLET } from 'constants/links.js';

/**
 * A translate button.
 * @return The html representation of the button.
 */

class TranslateButton extends Component {
  state = {
    messages: null
  };

  componentDidMount() {
    this.requestTranslation();
  }

  buildTranslatedMessages(content, index, languageCode) {
    const url =
      TRANSLATION_SERVLET +
      '?text=' +
      content.text.toString() +
      '&languageCode=' +
      languageCode.toString();
    fetch(url, {
      method: 'POST'
    })
      .then(response => response.text())
      .then(translatedMessage => {
        content.text = translatedMessage;
        const new_messages = this.state.messages;
        new_messages[index] = content;
        this.setState({ messages: new_messages });
      });
  }
  /** Called by clicking the button and translates all the messages and updates state */
  requestTranslation() {
    const messages = this.props.textList;
    const translatedMessages = messages
      ? messages.map((content, index) =>
          this.buildTranslatedMessages(content, index, this.props.languageCode)
        )
      : null;
    this.setState({ translatedMessages });
  }

  render() {
    return this.state.messages, <button> Translate</button>;
  }
}

TranslateButton.propTypes = {
  /** Function to get all the messages to translate. */
  textList: PropTypes.object,
  /** language code */
  languageCode: PropTypes.string
};

export default TranslateButton;
