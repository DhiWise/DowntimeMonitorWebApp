import React from "react";

export const Image = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={`${className} common-image`}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
