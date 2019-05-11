/**
 * @file Communicates with the /login servlet to handle logging in the user.
 */
import LoginStatus from '../protos/user.proto';

const getLoginStatus = function() {
  fetch('/login-status')
    .then(response => {
      return response.arrayBuffer();
    })
    .then(response => {
      console.log(response);
      // Response is expected to be a LoginStatus proto.
      const status = LoginStatus.deserializeBinary(response);
      if (status.isLoggedIn) {
        console.log('status');
      } else {
        console.log('status');
      }
    });
};

export { getLoginStatus };
