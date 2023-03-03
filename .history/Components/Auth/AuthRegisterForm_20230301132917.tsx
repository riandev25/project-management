import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { shallow } from 'zustand/shallow';
import { useAuthRegister } from '../../lib/hooks/auth/useAuthRegister';
import { authSchema } from '../../lib/utils/authSchema';
import { useAuthRegisterStore } from '../../store/authStore';
import { AuthSubmitBtn } from './AuthSubmitBtn';
import InputComponent from './InputElement';

const AuthRegisterForm = () => {
  const router = useRouter();
  const path = router.asPath.slice(6);

  // Hooks for http auth http request with react query

  const { isError, mutateAsync, registerLoading } = useAuthRegister();

  const [redirect, setRedirect] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors: errorsRegister },
    reset: resetLogin,
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  // Errors based on the input components

  const emailErrorRegister = String(errorsRegister.username?.message);
  const passwordErrorRegister = String(errorsRegister.password?.message);

  const { registerErrStatus, updateRegisterErr, updateRegisterErrStatus } =
    useAuthRegisterStore(
      (state) => ({
        registerErrStatus: state.registerErrStatus,
        updateRegisterErr: state.updateRegisterErr,
        updateRegisterErrStatus: state.updateRegisterErrStatus,
      }),
      shallow
    );

  const submitHandler = async (data: FieldValues, e: any) => {
    console.log(data);
    try {
      e.preventDefault();
      if (data) {
        console.log(data);
        const responseData = await mutateAsync({
          username: data.username,
          password: data.password,
        });
        console.log(responseData);
        if (responseData.response) {
          updateRegisterErr(responseData.response.data.msg);
          updateRegisterErrStatus();
          return;
        }
        resetLogin();
        setRedirect(true);
      }
    } catch (err) {
      throw new Error('Registration failed');
    }
  };

  useEffect(() => {
    if (redirect) router.push('/auth/login');
  }, [redirect, router]);

  return (
    <form
      className='flex flex-col space-y-5'
      onSubmit={handleSubmit(submitHandler)}
    >
      <InputComponent
        register={register}
        labelName='Email address'
        inputName='email'
        booleanError={errorsRegister.email}
        inputType='email'
        errorType={emailErrorRegister}
      />
      <InputComponent
        register={register}
        labelName='Password'
        inputName='password'
        booleanError={errorsRegister.password}
        inputType='password'
        errorType={passwordErrorRegister}
      />
      <AuthSubmitBtn btnName='Register' loadingStatus={registerLoading} />
    </form>
  );
};
export default AuthRegisterForm;
