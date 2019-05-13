import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamIntroCard from 'components/ui/TeamIntroCard.js';

/** Renders the /about page. */
class About extends Component {
  render = () => {
    const { contributors } = this.props;
    const renderedContributorsUi = contributors.keys.map(id =>
      renderContributorUi(contributors[id], id)
    );

    return (
      <div className='container'>
        <h1 className='center'>About Our Team</h1>
        {renderedContributorsUi}
      </div>
    );
  };
}

/**
 * @param {!Contributor} contributor A single contributor that exists in the
 * root redux store.
 * @param {number} id A unique id for the contributor.
 * @return The html representation of a contributor's introduction.
 */
const renderContributorUi = (contributor, id) => (
  <TeamIntroCard
    key={id}
    name={contributor.name}
    description={contributor.description}
  />
);

/**
 * Connects to redux store.
 * @param state The state of the storage.
 * @param state.contributors The members displayed in the About page.
 */
const mapStateToProps = state => ({
  contributors: state.contributors
});

export default connect(mapStateToProps)(About);
