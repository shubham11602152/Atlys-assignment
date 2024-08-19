import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

function LoginForm({ handleFormState }) {
  return (
    <div>
      <h2 className="uppercase text-light text-sm text-center font-medium mb-2">
        WELCOME BACK
      </h2>
      <h2 className="text-lg text-center font-semibold mb-11">
        Log into your account
      </h2>
      <InputField
        type={"text"}
        label={"Email or Username"}
        placeholder={"Enter your email or username"}
        fluid
      />
      <InputField
        type={"password"}
        label={"Password"}
        placeholder={"Enter your password"}
        fluid
      />
      <Button variant="primary" fluid>
        Login now
      </Button>
      <p className="text-sm font-medium mt-3">
        <span className="text-placeholder">Not registered yet?</span>{" "}
        <a className="text-neutral" onClick={handleFormState}>
          Register →
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
