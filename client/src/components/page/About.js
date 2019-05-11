import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamIntroCard from '../ui/TeamIntroCard';

/**
 * @param member A single member that exists in the root redux store.
 * @param member.id A unique id that identifies a member object.
 * @param member.name The name of the member.
 * @param member.description A description of the member.
 * @return The html representation of a member's introduction.
 */
const createMemberUi = function(member) {
  return (
    <TeamIntroCard
      key={member.id}
      name={member.name}
      description={member.description}
    />
  );
};

/** Creates the /about page. */
class About extends Component {
  render() {
    const { members, memberKeys } = this.props;

    // Loops through each team member and creates a ui card.
    const membersUi = memberKeys.map(id => createMemberUi(members[id]));

    return (
      <div className='container'>
        <h1 className='center'>About Our Team</h1>
        {membersUi}
      </div>
    );
  }
}

/**
 * Connects the About class to the redux Root storage.
 * @param state The state of the root storage.
 * @param state.aboutMembers The members displayed in the About page.
 * @param state.aboutMemberKeys The keys of all members.
 */
const mapStateToProps = state => {
  return {
    members: state.aboutMembers,
    memberKeys: state.aboutMemberKeys
  };
};

export default connect(mapStateToProps)(About);
