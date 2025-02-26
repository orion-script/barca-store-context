import React, { FC, ButtonHTMLAttributes } from "react";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
  RedButton,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
  red = "red",
}

const getButton = (
  buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base
) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.google:
      return GoogleSignInButton;
    case BUTTON_TYPE_CLASSES.inverted:
      return InvertedButton;
    case BUTTON_TYPE_CLASSES.red:
      return RedButton;
    default:
      return BaseButton;
  }
};

type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
