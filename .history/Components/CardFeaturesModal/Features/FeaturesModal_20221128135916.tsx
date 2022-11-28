import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import { ProjectDataContext } from '../../../lib/hooks/useDataContext';
import { useFeatureContext } from '../../../lib/hooks/useFeatureContext';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';

const LABEL_FEATURE_BTN = [
  {
    id: 'meta-btn',
    name: 'Meta',
    bgColor: 'bg-green-200 hover:bg-green-300',
    iconColor: 'text-green-500',
  },
];

// Exp

let data = [
  {
    title: 'Backlog',
    children: [
      {
        title:
          'Clicking the collection beneath a board should filter by collection, not open collections pop-over',
        desc: 'Paragpraph description',
        labels: [
          {
            id: 'meta-btn',
            name: 'Meta',
            bgColor: 'bg-green-200 hover:bg-green-300',
            iconColor: 'bg-green-500',
          },
        ],
      },
    ],
  },
];

const FeaturesModal = () => {
  const { closeLabel } = useContext(useFeatureContext);

  const dataContext = useContext(ProjectDataContext);

  useEffect(() => {
    dataContext.setData(data);
    console.log(dataContext.data);
  }, [dataContext]);

  return (
    <div className='absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <header className='flex justify-center items-center '>
        <h3 className='text-sm'>Labels</h3>
        <button
          type='button'
          className='absolute top-1 right-3'
          onClick={closeLabel}
        >
          <FontAwesomeIcon icon={faXmark} className='text-gray-500' />
        </button>
      </header>
      <input
        type='text'
        className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
        placeholder='Search labels...'
      />
      <section className='space-y-2'>
        <h4 className='text-xs font-semibold'>Labels</h4>
        <ul className='grid grid-cols-1 gap-1.5'>
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
            className='w-full bg-gray-200 py-1.5 px-3 text-sm text-gray-600 hover:bg-gray-300'
          >
            Create new label
          </button>
        </ul>
      </section>
    </div>
  );
};
export default FeaturesModal;
