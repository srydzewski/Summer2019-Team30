/**
 * This file holds reducers for the contributors to this project.
 */

/** The initial state of the reducer. */
const initState = {
  contributor1: {
    id: 'contributor1',
    name: 'Brian Chen ( Advisor)',
    description: 'Hello! I am Brian'
  },
  contributor2: {
    id: 'contributor2',
    name: 'Insert name here.',
    description: 'Insert description here.'
  },
  contributor3: {
    id: 'contributor3',
    name: 'Insert name here.',
    description: 'Insert description here.'
  },
  contributor4: {
    id: 'contributor4',
    name: 'Insert name here.',
    description: 'Insert description here.'
  },
  contributor5: {
    id: 'contributor5',
    name: 'Insert name here.',
    description: 'Insert description here.'
  },
  keys: [
    'contributor1',
    'contributor2',
    'contributor3',
    'contributor4',
    'contributor5'
  ]
};

export default function(state = initState, action) {
  return state;
}
