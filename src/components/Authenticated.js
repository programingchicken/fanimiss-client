import React from 'react';

//Auth sign in page
 const authenticated = ({ context  }) => {
  const authUser = context.authenticatedUser;
  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>{authUser.name} is authenticated!</h1>
      <p>Your Email/Username is {authUser.emailAddress}.</p>
    </div>
  </div>
  );
}

export default authenticated;