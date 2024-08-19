import InputField from "../../components/InputField";
import Button from "../../components/Button";

function RegisterForm({ handleFormState, onClickHandler }) {
  return (
    <>
      <h2 className="uppercase text-light text-sm text-center font-medium mb-2">
        SIGN UP
      </h2>
      <h2 className="text-lg text-center font-semibold mb-11">
        Create an account to continue
      </h2>
      <InputField
        type={"text"}
        label={"Email"}
        placeholder={"Enter your email"}
        inputClassName={"mb-4"}
        fluid
      />
      <InputField
        type={"text"}
        label={"Username"}
        placeholder={"Choose a preferred username"}
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
        Continue
      </Button>
      <p className="text-sm font-medium mt-3">
        <span className="text-placeholder">Already have an account?</span>{" "}
        <a className="text-neutral" onClick={handleFormState}>
          Login →
        </a>
      </p>
    </>
  );
}

export default RegisterForm;
