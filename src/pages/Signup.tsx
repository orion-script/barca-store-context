import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase";
import FormInput from "../components/form-input/form-input.component";
import Button from "../components/button/button.component";

interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredential && userCredential.user) {
        const { user } = userCredential;

        // await createUserDocumentFromAuth(user, { displayName });

        resetFormFields();
        navigate("/login");
        console.log("user", user);
      }
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.error("Error creating user:", error.message);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-11/12 md:w-2/4 h-screen m-auto pt-10">
      <h1 className="text-center text-xl">Sign-Up Form</h1>
      <form onSubmit={handleSubmit}>
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
        <a href="/signin">Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;
