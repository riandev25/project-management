import { useRouter } from 'next/router';
import { useAuthRegister } from '../../lib/hooks/auth/useAuthRegister';
import { AuthSubmitBtn } from './AuthSubmitBtn';
import InputComponent from './InputElement';

const AuthRegisterForm = () => {
  const router = useRouter();
  const path = router.asPath.slice(6);

  // Hooks for http auth http request with react query

  const {
    handleRegisterSubmit,
    registerSubmitHandler,
    registerRegistration,
    errorsRegister,
    emailErrorRegister,
    passwordErrorRegister,
    registerLoading,
  } = useAuthRegister();

  // const {
  //   handleLoginSubmit,
  //   loginSubmitHandler,
  //   registerLogin,
  //   errorsLogin,
  //   emailErrorLogin,
  //   passwordErrorLogin,
  //   loginLoading,
  // } = useAuthLogin();

  return (
    <form
      action='#'
      className='flex flex-col space-y-5'
      onSubmit={handleRegisterSubmit(registerSubmitHandler)}
    >
      <InputComponent
        register={registerRegistration}
        labelName='Email address'
        inputName='email'
        booleanError={errorsRegister.email}
        inputType='email'
        errorType={emailErrorRegister}
      />
      <InputComponent
        register={registerRegistration}
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
