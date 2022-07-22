import { ErrorMessage } from "components/ErrorMessage";
import React from "react";

export const Input = React.forwardRef(
  (
    {
      WrapClassName = "",
      className,
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      ...restProps
    },
    ref
  ) => {
    return (
      <div className={WrapClassName}>
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);
