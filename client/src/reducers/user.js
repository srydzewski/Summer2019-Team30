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

/** The initial state of the user when the page first loads. */
const initalUserState = new User(false, null);

/**
 * Sets the redux user to the user state.
 *
 * @param state The previous state of the user.
 * @param action.user The new state of the user.
 * @return The new state of the user.
 */
const handleSetUser = (state, action) => Object.assign({}, state, action.user);

/**
 * A reducer that handles actions on the state of the user.
 * @param state The state of the user.
 * @param action Some action to perform on the user.
 * @param action.type The type of action to perform on the user.
 */
const userReducer = (state = initalUserState, action) => {
  switch (action.type) {
    case UserActions.SET_USER:
      return handleSetUser(state, action);
    default:
      return state;
  }
};

/**
 * @param user The new user state.
 * @return An action to set the user.
 */
const setUser = user => ({
  type: UserActions.SET_USER,
  user
});

/** Classes and Constants */
export default User;

/** Constants */
export { UserActions };

/** Reducers */
export { userReducer };

/** Actions */
export { setUser };
