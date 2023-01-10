import Image from 'next/image';
import authImg from '../../public/images/auth-img.png';
import AuthForm from './AuthForm';

const AuthMainComponent = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-screen'>
      <Image src={authImg} alt='Login page image' width={1200} height={500} />
      <AuthForm />
    </div>
  );
};

export default AuthMainComponent;
