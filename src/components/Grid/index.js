import React from "react";

export const Grid = ({ children, className, ...restProps }) => {
  return (
    <div className={`${className} common-grid`} {...restProps}>
      {children}
    </div>
  );
};
