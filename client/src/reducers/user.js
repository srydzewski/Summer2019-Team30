/**
 * @file This file holds reducers for the current user.
 */

/** An enumeration of actions to modify user data. */
const UserActions = {
  SET_USER: 1
};

/** Client representation of a user. */
class User {
  constructor(isLoggedOn, email) {
    /** Whether the user is logged on. */
    this.isLoggedOn = isLoggedOn;

    /** The email of the user. */
    this.email = email;
  }
}

/**
 * Performs some action on the state of the user.
 * @param state The state of the user.
 * @param action Some action to perform on the user.
 * @param action.type The type of action to perform on the user.
 */
const userReducer = (state = new User(false, null), action) => {
  switch (action.type) {
    case UserActions.SET_USER:
      return handleSetUser(action);
    default:
      return state;
  }
};

/**
 * Sets the redux user to the user state.
 *
 * @param state The previous state of the user.
 * @param action.user The new state of the user.
 * @return The new state of the user.
 */
const handleSetUser = (state, action) => {
  return Object.assign({}, state, action.user);
};

/**
 * @param user The new user state.
 * @return An action to set the user.
 */
const setUser = user => {
  return {
    type: UserActions.SET_USER,
    user
  };
};

/** Classes and Constants */
export { User, UserActions };

/** Reducers */
export { userReducer };

/** Actions */
export { setUser };
