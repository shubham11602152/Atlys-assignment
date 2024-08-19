import React from "react";

function CenteredLayout({ children, className }) {
  return <div className={`max-w-[700px] mx-auto ${className}`}>{children}</div>;
}

export default CenteredLayout;
