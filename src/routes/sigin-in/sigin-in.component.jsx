// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";

// import { async } from "@firebase/util";

const SignIN = () => {
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

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const logGoogleUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };

  return (
    <div>
      Sign in component
      <button onClick={logGoogleUser}>SignIn with Google</button>
      {/* <button onClick={logGoogleUserRedirect}>
        SignIn with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIN;
