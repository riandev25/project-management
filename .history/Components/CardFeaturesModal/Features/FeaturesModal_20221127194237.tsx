import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';

const LABEL_FEATURE_BTN = [
  {
    id: 'meta-btn',
    name: 'Meta',
    bgColor: 'bg-green-100 hover:bg-green-200',
    iconColor: 'bg-green-800',
  },
];

const FeaturesModal = () => {
  return (
    <div className='absolute flex flex-col w-80 px-2'>
      <header className='flex justify-center items-center p-2'>
        <h3 className='text-sm'>Labels</h3>
        <button type='button' className='absolute top-0 right-0'>
          <FontAwesomeIcon icon={faXmark} className='text-gray-300' />
        </button>
        {/* <input type='text' placeholder='Search labels...' />
        <section>
          <h4>Label</h4>
          <ul>
            {LABEL_FEATURE_BTN.map(({ id, bgColor, name, iconColor }) => {
              return (
                <li key={id}>
                  <DefaultBtn
                    bgColor={bgColor}
                    name={name}
                    iconColor={iconColor}
                    icon={faCircle}
                    fullWidth={true}
                  />
                </li>
              );
            })}
          </ul>
        </section>
        <button type='button'className='w-full bg-gray-100 py-1 px-3 text-gray-600 hover:bg-gray-200' >Create new label</button> */}
      </header>
    </div>
  );
};
export default FeaturesModal;
