import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultBtn from '../../UI/Buttons/DefaultBtn';

const Labels = () => {
  return (
    <section className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <section className='flex flex-row gap-2'>
        <DefaultBtn
          bgColor='bg-blue-300'
          icon={faCircle}
          iconColor='text-blue-400'
          name='New team/boards tab'
        />
        <DefaultBtn
          bgColor='bg-gray-200'
          icon={faPlus}
          iconColor='text-gray-800'
        />
      </section>
    </section>
  );
};
export default Labels;
