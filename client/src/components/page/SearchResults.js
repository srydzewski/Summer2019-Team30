import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SEARCH_SERVLET } from 'constants/links.js';
import Message from 'components/ui/Message.js';

/** Gets the parameters from the url. Parameters are after the ? in the url. */
const urlParams = new URLSearchParams(window.location.search);
/** The email of the currently displayed user. */
const searchParam = urlParams.get('query');
/** Message url */
const url = SEARCH_SERVLET + '?query=' + searchParam;
const promises = Promise.all([fetch(url)]);

const buildMessages = function(content) {
  return (
    <Message
      user={content.user}
      timestamp={content.timestamp}
      text={content.text}
    />
  );
};

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    };
  }
  componentDidMount() {
    promises
      .then(results => Promise.all(results.map(r => r.clone().json())))
      .then(results => {
        const [search] = results;
        this.setState({ search });
      });
    this.fetchUrl();
  }

  fetchUrl() {
    fetch(SEARCH_SERVLET).then(response => {
      return response.text();
    });
  }

  render() {
    const { search } = this.state;
    const searchUi = search ? search.content : null;

    return (
      <div>
        {' '}
        RESULTS PAGE
        {searchUi}
      </div>
    );
  }
}

export default SearchResults;
