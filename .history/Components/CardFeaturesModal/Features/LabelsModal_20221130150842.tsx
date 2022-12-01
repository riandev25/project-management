import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useContext } from 'react';
import { useFeatureContext } from '../../../lib/hooks/useFeatureContext';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import { CardChildren, LabelProp, ILabels } from '../../../interfaces/data';
import { LabelContext } from '../../../lib/hooks/useDataContext';

const LABEL_FEATURE_BTN = [
  {
    id: 'meta-btn',
    name: 'Meta',
    bgColor: 'bg-green-200 hover:bg-green-300',
    iconColor: 'text-green-500',
  },
];

// Exp

const LabelsModal = ({ labels }: CardChildren) => {
  const { closeLabel } = useContext(useFeatureContext);
  const { dispatchLabel } = useContext(LabelContext);

  const addLabel = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    dispatchLabel({
      type: 'ADD_LABEL',
    });
  };

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
          {labels.map(({ id, bgColor, name, iconColor, isChecked }) => {
            return (
              <li
                key={id}
                className='flex flex-row justify-center items-center gap-2'
              >
                <div className='flex flex-row justify-center items-center w-full gap-2'>
                  <input
                    type='checkbox'
                    data-id={id}
                    name={name}
                    value={name}
                    checked={isChecked}
                    onChange={addLabel}
                  />
                  <DefaultBtn
                    bgColor={bgColor}
                    name={name}
                    iconColor={iconColor}
                    icon={faCircle}
                    fullWidth={true}
                  />
                </div>

                <button type='button'>
                  <FontAwesomeIcon icon={faPenToSquare} size='1x' />
                </button>
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
export default LabelsModal;
function dispatchLabel(arg0: { type: string }) {
  throw new Error('Function not implemented.');
}
