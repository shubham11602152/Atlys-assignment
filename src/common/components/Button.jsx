import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ variant = "primary", fluid, className, children, ...props }) {
  const buttonClass = classNames(
    styles.btn,
    styles[`btn-${variant}`],
    {
      [styles["btn-fluid"]]: fluid,
    },
    "rounded-md",
    className
  );
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
