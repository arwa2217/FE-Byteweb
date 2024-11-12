import { EMAIL, PASSWORD } from "../constant/formKeys";

export const loginValidators = {
    [EMAIL]: {
    required: 'Please enter your email',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Please enter a valid email address',
    },
  },
    [PASSWORD]: {
        required:"Please enter your password"
    },
}