import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useContext } from 'react';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import { LabelContext } from '../../../lib/context/LabelContext/LabelContext';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import LabelOption from './LabelOption';
import { IUpdateData, ILabelOption } from '../../../interfaces/data';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
// import { FeatureContext } from '../../../lib/context/FeatureContext/FeatureContext';

// Exp

const LabelsModal = () => {
  const [createLabel, setCreateLabel] = React.useState<boolean>(false);
  const { labelState, dispatchLabel } = useContext(LabelContext);

  const { dispatchFeature } = useContext(FeatureContext);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.dataset.id;
    dispatchLabel({
      type: 'LABEL_TOGGLE',
      payload: id,
    });
  };

  const labelOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: id,
    });
  };

  const labelUpdateHandler = (data: IUpdateData) => {
    dispatchLabel({
      type: 'UPDATE_LABEL',
      payload: data,
    });
  };

  const createLabelHandler = (data: ILabelOption) => {
    dispatchLabel({
      type: 'CREATE_LABEL',
      payload: data,
    });
  };

  const openLabelOptionHandler = () => {
    setCreateLabel(!createLabel);
  };

  const onExitBtnHandler = (id: string, effect: string) => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: effect },
    });
  };

  return (
    <div className='absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal
        title='Labels'
        idFeature='labels-option'
        leftBtn={false}
        exitBtnHandler={onExitBtnHandler}
      />
      <input
        type='text'
        className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
        placeholder='Search labels...'
      />
      <section className='space-y-2'>
        <h4 className='text-xs font-semibold'>Labels</h4>
        <ul className='grid grid-cols-1 gap-1.5'>
          {labelState.map(
            ({
              id,
              bgColor,
              bgColorStrip,
              bgColorHover,
              name,
              iconColor,
              isChecked,
              isOpen,
            }) => {
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
                      bgColorHover={bgColorHover}
                      name={name}
                      iconColor={iconColor}
                      icon={faCircle}
                      fullWidth={true}
                      isDisabled={true}
                      // onClick={labelOptionHandler}
                    />
                  </div>

                  <button
                    type='button'
                    data-id={id}
                    onClick={labelOptionHandler}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} size='1x' />
                  </button>
                  {isOpen && (
                    <LabelOption
                      id={id}
                      bgColor={bgColor}
                      bgColorHover={bgColorHover}
                      bgColorStrip={bgColorStrip}
                      name={name}
                      iconColor={iconColor}
                      icon={faCircle}
                      fullWidth={true}
                      isDisabled={true}
                      isCreate={false}
                      onUpdateData={labelUpdateHandler}
                    />
                  )}
                </li>
              );
            }
          )}
          <button
            type='button'
            data-id='example-two'
            data-effect='example'
            onClick={openLabelOptionHandler}
            className='w-full bg-gray-200 py-1.5 px-3 text-sm text-gray-600 hover:bg-gray-300'
          >
            Create new label
          </button>
          {createLabel && (
            <LabelOption
              id='create-exit-btn'
              bgColor='bg-green-400'
              bgColorStrip='bg-green-600'
              iconColor='text-green-600'
              name=''
              icon={faCircle}
              fullWidth={true}
              isDisabled={true}
              isCreate={true}
              openLabelOption={openLabelOptionHandler}
              onCreateData={createLabelHandler}
            />
          )}
        </ul>
      </section>
    </div>
  );
};
export default LabelsModal;
