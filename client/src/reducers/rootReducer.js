/**
 * This file holds Redux reducers on the root used to alter global ui states
 * and data.
 */

// TODO(brianch): Figure out how to make redux work with proto3. Json format
// is too unstructured.

/** The initial global ui state. */
const rootState = {
  aboutMembers: {
    aboutMember1: {
      id: 'aboutMember1',
      name: 'Brian Chen (Project Advisor)',
      description: 'Hello! I am Brian'
    },
    aboutMember2: {
      id: 'aboutMember2',
      name: 'Insert name here.',
      description: 'Insert description here.'
    },
    aboutMember3: {
      id: 'aboutMember3',
      name: 'Insert name here.',
      description: 'Insert description here.'
    },
    aboutMember4: {
      id: 'aboutMember4',
      name: 'Insert name here.',
      description: 'Insert description here.'
    },
    aboutMember5: {
      id: 'aboutMember5',
      name: 'Insert name here.',
      description: 'Insert description here.'
    }
  },
  aboutMemberKeys: [
    'aboutMember1',
    'aboutMember2',
    'aboutMember3',
    'aboutMember4',
    'aboutMember5'
  ]
};

/**
 * Returns the state of the root.
 * @param {*} state The new state of the root. Defaults to rootState.
 */
const rootReducer = (state = rootState, action) => {
  return state;
};

export default rootReducer;
