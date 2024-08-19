function EmojiIcon({ children }) {
  return (
    <div className="flex min-w-[48px] min-h-[48px] place-items-center place-content-center bg-foreground rounded-full">
      {children}
    </div>
  );
}

export default EmojiIcon;
