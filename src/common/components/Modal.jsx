function Modal({ children, ...props }) {
  return (
    <div
      className="fixed left-0 top-0 w-screen h-screen backdrop-blur-sm flex place-items-center place-content-center"
      {...props}
    >
      {children}
    </div>
  );
}

export default Modal;
