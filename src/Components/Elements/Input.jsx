import React from "react";

const Input = React.forwardRef(({ type, ...rest }, ref) => {
  return (
    <div>
      <input
        className="border w-full rounded-md p-1"
        {...rest}
        ref={ref}
        type={type}
      />
    </div>
  );
});

export default Input;
