import React, { InputHTMLAttributes, FC, useState, ChangeEvent } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (otherProps.onChange) {
      otherProps.onChange(e);
    }
  };

  const inputValue = otherProps.value || "";

  return (
    <div className="my-10 relative">
      <input
        {...otherProps}
        className={`block w-full bg-white px-4 py-3 border-b rounded-lg focus:outline-none ${
          isFocused || (inputValue as string).length > 0
            ? "border-grey"
            : "border-grey-light"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label
        className={`${
          isFocused || (inputValue as string).length > 0
            ? "top-[-20px] text-[16px] text-[#000]"
            : "text-[#ccc]"
        } absolute pointer-events-none left-4 top-2 transition-all text-grey-darker`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
