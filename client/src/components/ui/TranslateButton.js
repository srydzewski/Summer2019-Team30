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
    this.returnMessages();
  }

  returnMessages() {
    this.setState({ messages: this.props.textList });
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
        console.log(translatedMessage);
        console.log(this.state.messages);
        const new_messages = this.state.messages;
        new_messages[index] = content;
        this.setState({ messages: new_messages });
      });
  }
  /** Called by clicking the button and translates all the messages and updates state */
  requestTranslation(languageCode) {
    const messages = this.props.textList;
    this.setState({ messages: messages });
    const translatedMessages = messages
      ? messages.map((content, index) =>
          this.buildTranslatedMessages(content, index, languageCode)
        )
      : null;
    this.setState({ translatedMessages });
  }

  render() {
    return (
      <button
        onClick={e =>
          this.requestTranslation(document.getElementById('language').value)
        }>
        Translate
      </button>
    );
  }
}

TranslateButton.propTypes = {
  /** Function to get all the messages to translate. */
  textList: PropTypes.array
};

export default TranslateButton;
