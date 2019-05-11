/**
 * @file Communicates with the /login servlet to handle logging in the user.
 */

const getLoginStatus = function() {
  fetch('/login-status')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(status => {
      console.log(status);
      // Response is expected to be a LoginStatus proto.
      if (status.isLoggedIn) {
        console.log('Yes');
      } else {
        console.log('No');
      }
    });
};

export { getLoginStatus };
