import Button from "./Button";

function IconButton({ children, ...props }) {
  return (
    <Button
      className="flex min-w-[32px] min-h-[32px] [&&]:rounded-full p-2 ml-auto"
      {...props}
    >
      {children}
    </Button>
  );
}

export default IconButton;
