import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/form-input/form-input.component";
import Button from "../components/button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

function Login() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // await createUserDocumentFromAuth(user);
    console.log("Logged in with Google");
    console.log("user", user);
    navigate("/home");
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/home");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for the Email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this Email");
          break;
        default:
          alert(error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <AuthLayout>
      <div className="w-11/12 md:w-2/4 h-screen m-auto pt-10">
        <h1 className="text-center text-xl">Sign-In Form</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email*"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password*"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <Button type="submit">Sign In</Button>
        </form>
        <div className="flex justify-end my-5">
          <h2 className="mr-2">Don't have an account?</h2>
          <a href="/signup">Sign up</a>
        </div>
        <div className="flex justify-start mt-10">
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
