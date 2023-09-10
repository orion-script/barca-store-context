import React from "react";
import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "../components/form-input/form-input.component";
import Button from "../components/button/button.component";

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
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  //   navigate("/");
  // };

  // const signInWithGoogle = async () => {
  //   dispatch(googleSignInStart());
  //   navigate("/shop");
  // };

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   try {
  //     dispatch(emailSignInStart(email, password));
  //     resetFormFields();
  //     alert("Signed in successfully");
  //     navigate("/shop");
  //   } catch (error) {
  //     console.log("user sign in failed", error);
  //   }
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-11/12 md:w-2/4 h-screen m-auto pt-10">
      <h1 className="text-center text-xl">Sign-In Form</h1>
      <form>
        {/* <form onSubmit={handleSubmit}> */}
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
      <div className="flex justify-center mt-10">
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          type="button"
          // onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
