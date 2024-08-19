import React from "react";

function CenteredLayout({ children }) {
  return <div className="max-w-[700px] mx-auto">{children}</div>;
}

export default CenteredLayout;
