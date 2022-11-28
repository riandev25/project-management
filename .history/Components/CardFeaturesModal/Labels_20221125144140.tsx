import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultBtn from '../../UI/Buttons/DefaultBtn';

const Labels = () => {
  return (
    <section className='flex flex-col justify-start items-center'>
      <header>
        <h3>Labels</h3>
      </header>
      <section>
        {/* <button type='button' className='bg-blue-300 p-2 space-x-1'>
          <span>
            <FontAwesomeIcon icon={faCircle} className='text-blue-400' />
          </span>
          <span>New Team/boards tab</span>
        </button> */}
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
