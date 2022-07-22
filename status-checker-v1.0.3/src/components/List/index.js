import React from "react";

export const List = ({ children, className, orientation, ...restProps }) => {
  return (
    <div
      className={`${className} ${
        orientation === "horizontal" ? "common-grid" : "common-list"
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
};
