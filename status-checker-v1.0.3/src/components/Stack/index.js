import React from "react";

export const Stack = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-stack`} {...restProps}>
      {children}
    </div>
  );
};
