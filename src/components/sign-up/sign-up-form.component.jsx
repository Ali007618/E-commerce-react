import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";

import "./sign-up.style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  console.log("hit");

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, displayName, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("can't create user, email is already in use");
      } else {
        console.log("user creation encountered error");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* <label>Display Name</label> */}
        <FormInput
          label={"Display Name"}
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label={"Email"}
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label={"password"}
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <FormInput
          label={"comfirm password"}
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
