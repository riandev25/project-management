import { HTMLInputTypeAttribute } from 'react';
import {
  UseFormRegister,
  FieldValues,
  FieldErrorsImpl,
  FieldError,
  Merge,
} from 'react-hook-form';

export interface IAuth {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  password: string;
}

export interface ILoginResult {
  success: boolean;
  token: string;
  status: string;
  user: {
    _id: string;
    usename: string;
    apiKey: string;
  };
}

export interface IAuthInput {
  register: UseFormRegister<FieldValues>;
  labelName: string;
  inputName: string;
  booleanError?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  inputType: HTMLInputTypeAttribute | string;
  errorType: string;
}

export interface IAuthSubmitBtn {
  btnName: string;
  loadingStatus: boolean;
}
