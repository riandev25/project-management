import Image from 'next/image';
import authImg from '../../public/images/auth-img.png';

const AuthMainComponent = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <section>
        <Image
          src={authImg}
          alt='Picture of the author'
          width={2000}
          height={1500}
        />
      </section>
      {/* <section>

    </section> */}
    </div>
  );
};

export default AuthMainComponent;
