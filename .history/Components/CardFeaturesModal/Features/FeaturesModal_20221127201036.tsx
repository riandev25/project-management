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
    <div className='absolute flex flex-col w-72 bg-white px-2 gap-1.5'>
      <header className='flex justify-center items-center border-b border-solid border-gray-100 p-2'>
        <h3 className='text-sm'>Labels</h3>
        <button type='button' className='absolute top-0 right-0'>
          <FontAwesomeIcon icon={faXmark} className='text-gray-300' />
        </button>
      </header>
      <input
        type='text'
        className='w-full border-2 border-solid border-gray-200 px-2 py-1'
        placeholder='Search labels...'
      />
      <section className=''>
        <h4 className='text-xs font-semibold'>Labels</h4>
        <ul className='grid grid-cols-1 gap-1'>
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
          <button
            type='button'
            className='w-full bg-gray-100 py-1 px-3 text-gray-600 hover:bg-gray-200'
          >
            Create new label
          </button>
        </ul>
      </section>
    </div>
  );
};
export default FeaturesModal;
