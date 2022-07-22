import React from "react";

export const Button = ({
  children,
  className,
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  return (
    <button className={`${className} common-button`} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
