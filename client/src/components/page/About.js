import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamIntroCard from 'components/ui/TeamIntroCard.js';

/**
 * @param {!Contributor} contributor A single contributor that exists in the root redux store.
 * @param id A unique id for the contributor.
 * @return The html representation of a contributor's introduction.
 */
const createContributorUi = (contributor, id) => {
  return (
    <TeamIntroCard
      key={id}
      name={contributor.name}
      description={contributor.description}
    />
  );
};

/** Creates the /about page. */
class About extends Component {
  render() {
    const { contributors } = this.props;

    // Loops through each project contributor and creates a ui card.
    const contributorsUi = contributors.keys.map(id =>
      createContributorUi(contributors[id], id)
    );

    return (
      <div className='container'>
        <h1 className='center'>About Our Team</h1>
        {contributorsUi}
      </div>
    );
  }
}

/**
 * Connects the About class to the redux Root storage.
 * @param state The state of the root storage.
 * @param state.contributors The members displayed in the About page.
 * @param state.contributorKeys The keys of all members.
 */
const mapStateToProps = state => {
  return {
    contributors: state.contributors
  };
};

export default connect(mapStateToProps)(About);
