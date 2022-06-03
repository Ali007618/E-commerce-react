// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";

// import { async } from "@firebase/util";
import "./authentication.style.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //     // ...
  //   }
  //   fetchData();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef);
  // };

  // const logGoogleUserRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  // };

  return (
    <div className="authentication-container">
      {/* Sign in component */}
      {/* <button onClick={logGoogleUser}>SignIn with Google</button> */}
      {/* <button onClick={logGoogleUserRedirect}>
        SignIn with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
