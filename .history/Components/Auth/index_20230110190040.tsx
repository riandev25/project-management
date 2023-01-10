import Image from 'next/image';
import authImg from '../../public/images/auth-img.png';

const AuthMainComponent = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <section>
        <Image src={authImg} alt='Login page image' width={1200} height={700} />
      </section>
      {/* <section>

    </section> */}
    </div>
  );
};

export default AuthMainComponent;
