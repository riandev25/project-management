import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';
import { FeatureContext } from '../../../lib/context/FeatureContext/FeatureContext';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import { LabelContext } from '../../../lib/context/LabelContext/LabelContext';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import Portal from '../../../lib/portal/Portal';
import LabelOption from './LabelOption';

// Exp

const LabelsModal = () => {
  const { openFeatureModal } = useContext(FeatureContext);

  const { labelState, dispatchLabel } = useContext(LabelContext);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.dataset.id;
    dispatchLabel({
      type: 'LABEL_TOGGLE',
      payload: id,
    });
  };

  const exampleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event?.currentTarget.dataset.id);
    console.log(event?.currentTarget.dataset.payload);
  };

  return (
    <div className='absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal title='Labels' idX='labels-option' leftBtn={false} />
      <input
        type='text'
        className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
        placeholder='Search labels...'
      />
      <section className='space-y-2'>
        <h4 className='text-xs font-semibold'>Labels</h4>
        <ul className='grid grid-cols-1 gap-1.5'>
          {labelState.map(({ id, bgColor, name, iconColor, isChecked }) => {
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
                    onChange={onChangeHandler}
                  />
                  <DefaultBtn
                    id={id}
                    bgColor={bgColor}
                    name={name}
                    iconColor={iconColor}
                    icon={faCircle}
                    fullWidth={true}
                    isDisabled={true}
                  />
                </div>

                <button type='button' data-id={id}>
                  <FontAwesomeIcon icon={faPenToSquare} size='1x' />
                </button>
                {/* <Portal portalId={`#${name}`}>
                  <LabelOption
                    id={id}
                    bgColor={bgColor}
                    name={name}
                    iconColor={iconColor}
                    icon={faCircle}
                    fullWidth={true}
                    isDisabled={true}
                  />
                </Portal> */}
              </li>
            );
          })}
          <button
            type='button'
            data-id='example-two'
            data-effect='example'
            onClick={exampleClick}
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
