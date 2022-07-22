import { ErrorMessage } from "components/ErrorMessage";
import React from "react";

export const TextArea = React.forwardRef(
  (
    { className, name, placeholder, children, errors = [], ...restProps },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={className}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
