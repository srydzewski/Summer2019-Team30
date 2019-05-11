import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamIntroCard from '../ui/TeamIntroCard';

/**
 * @param contributor A single contributor that exists in the root redux store.
 * @param contributor.id The unique id of the contributor.
 * @param contributor.name The name of the contributor.
 * @param contributor.description A description of the contributor.
 * @return The html representation of a contributor's introduction.
 */
const createMemberUi = function(contributor) {
  return (
    <TeamIntroCard
      key={contributor.id}
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
    const contributorsListUi = contributors.keys.map(id =>
      createMemberUi(contributors[id])
    );

    return (
      <div className='container'>
        <h1 className='center'>About Our Team</h1>
        {contributorsListUi}
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
