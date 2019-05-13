import React from 'react';

/**
 * Displays a title and description. Used as a placard for team members listed
 * in the about page.
 * @param props Properties passed to the TeamIntroCard.
 * @param props.name The name of the team member.
 * @param props.description A description about the team member.
 * @return The html representation of the TeamIntroCard.
 */
const TeamIntroCard = props => (
  <div className='TeamIntroCard'>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
  </div>
);

export default TeamIntroCard;
