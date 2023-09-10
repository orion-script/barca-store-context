import React, { useState, FormEvent, ChangeEvent } from "react";
// import { AuthError, AuthErrorCodes } from 'firebase/auth';
// import { useDispatch } from 'react-redux';

import FormInput from "../components/form-input/form-input.component";
import Button from "../components/button/button.component";

// import { SignUpContainer } from './sign-up-form.styles';
// import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  //   const dispatch = useDispatch();

  //   const resetFormFields = () => {
  //     setFormFields(defaultFormFields);
  //   };

  //   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     if (password !== confirmPassword) {
  //       alert("passwords do not match");
  //       return;
  //     }

  //     try {
  //       dispatch(signUpStart(email, password, displayName));
  //       resetFormFields();
  //     } catch (error) {
  //       if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
  //         alert("Cannot create user, email already in use");
  //       } else {
  //         console.log("user creation encountered an error", error);
  //       }
  //     }
  //   };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-11/12 md:w-2/4 h-screen m-auto pt-10">
      <h1 className="text-center text-xl">Sign-Up Form</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <div className="flex justify-end my-5">
        <h2 className="mr-2">Already have an account?</h2>
        <a href="/login">Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;
