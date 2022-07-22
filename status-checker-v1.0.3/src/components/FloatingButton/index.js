import React from "react";

export const FloatingButton = ({ children, className, ...restProps }) => {
  return (
    <button className={`${className} common-floating-button`} {...restProps}>
      {children}
    </button>
  );
};
