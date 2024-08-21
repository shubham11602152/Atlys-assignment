import React from "react";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Login/RegisterForm";
import closeIcon from "../../../assets/Cross 2.svg";
import { useNavigate } from "react-router-dom";
import IconButton from "../../components/IconButton";
import { AnimatePresence } from "framer-motion";

function LoginModal({ open, onClose }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(true);
  const buttonClickHandler = () => {
    navigate("/");
  };
  const handleFormState = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {open && (
        <Modal>
          <Card className="[&&]:px-6 [&&]:py-10">
            <IconButton variant="secondary" onClick={onClose}>
              <img src={closeIcon} />
            </IconButton>
            {isLogin ? (
              <LoginForm
                handleFormState={handleFormState}
                onClickHandler={buttonClickHandler}
              />
            ) : (
              <RegisterForm
                handleFormState={handleFormState}
                onClickHandler={buttonClickHandler}
              />
            )}
          </Card>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default LoginModal;
