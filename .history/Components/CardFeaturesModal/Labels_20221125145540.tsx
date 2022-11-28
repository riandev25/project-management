import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultBtn from '../../UI/Buttons/DefaultBtn';

const Labels = () => {
  return (
    <section className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <section>
        <DefaultBtn
          bgColor='bg-blue-300'
          pos='center'
          icon={faCircle}
          iconColor='text-blue-400'
        />
      </section>
    </section>
  );
};
export default Labels;
