function Card({ children, className, ...props }) {
  return (
    <div className="rounded-lg p-[2px] bg-gradient-to-br from-[#969696] to-[#343434] duration-75">
      <div
        className={`bg-foreground px-5 py-6 rounded-[calc(8px-2px)] duration-75 ${className}`}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
