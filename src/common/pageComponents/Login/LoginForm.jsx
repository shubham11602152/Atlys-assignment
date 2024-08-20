import InputField from "../../components/InputField";
import Button from "../../components/Button";

function LoginForm({ handleFormState, onClickHandler }) {
  return (
    <>
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
        inputClassName={"mb-4"}
        fluid
      />
      <InputField
        type={"password"}
        label={"Password"}
        placeholder={"Enter your password"}
        inputClassName={"mb-4"}
        fluid
      />
      <Button
        className={"mt-5"}
        variant="primary"
        onClick={onClickHandler}
        fluid
      >
        Login now
      </Button>
      <p className="text-sm font-medium mt-3">
        <span className="text-placeholder">Not registered yet?</span>{" "}
        <a className="text-neutral" onClick={handleFormState}>
          Register&nbsp;→
        </a>
      </p>
    </>
  );
}

export default LoginForm;
