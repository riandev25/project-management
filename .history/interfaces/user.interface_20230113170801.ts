import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form';

export interface IUser {
  email: string;
  password: string;
}

export interface IAuthInput {
  register: UseFormRegister<FieldValues>;
  labelName: string;
  booleanError: Partial<FieldErrorsImpl>;
  inputType: HTMLInputTypeAttribute;
  errorType: string;
}
