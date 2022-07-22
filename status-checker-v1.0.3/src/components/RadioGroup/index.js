import { ErrorMessage } from "components/ErrorMessage";
import React from "react";
import { Radio } from "../Radio";

export const RadioGroup = React.forwardRef(
  (
    {
      selectedValue,
      orientation = "horizontal",
      className,
      name,
      children,
      onChange,
      disabled,
      errors = [],
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(selectedValue);

    React.useEffect(() => {
      setValue(selectedValue);
    }, [selectedValue]);

    const handleChange = (event, val, isDisabled) => {
      if (isDisabled) return;
      setValue(val);
      onChange && onChange(val, event);
    };

    const childrens = React.Children.map(children, (child) => {
      if (child.type === Radio) {
        return React.cloneElement(child, {
          value: child.props.value,
          name,
          checked: child.props.value === value,
          onChange: (e) =>
            handleChange(e, child.props.value, child.props.disabled),
          orientation,
          disabled: child.props.disabled,
        });
      }
      return child;
    });

    return (
      <>
        <div className={className}>{childrens}</div>
        <ErrorMessage errors={errors} />
      </>
    );
  }
);
