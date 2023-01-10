import Image from 'next/image';
import authImg from '../../public/images/auth-img.png';

const AuthMainComponent = () => {
  return (
    <div className='flex flex-row'>
      <section>
        <Image src={authImg} alt='Login page image' width={1000} height={700} />
      </section>
      {/* <section>

    </section> */}
    </div>
  );
};

export default AuthMainComponent;
