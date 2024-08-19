import React from "react";
import logo from "../../assets/Logo.svg";
import LoginForm from "../../common/pageComponents/LoginForm";
import RegisterForm from "../../common/pageComponents/RegisterForm";
import Card from "../../common/components/Card";
import CenteredLayout from "../../common/layouts/CenteredLayout";
import { Link } from "react-router-dom";
function Login() {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleFormState = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <CenteredLayout className="min-h-[90vh] flex flex-col place-content-center place-items-center">
      <Link to={"/"}>
        <img className="mx-auto mb-12" src={logo} />
      </Link>

      <Card className="[&&]:px-6 [&&]:py-10 [&&]:max-w-[463px] [&&]:w-screen">
        {isLogin ? (
          <LoginForm handleFormState={handleFormState} />
        ) : (
          <RegisterForm handleFormState={handleFormState} />
        )}
      </Card>
    </CenteredLayout>
  );
}

export default Login;
