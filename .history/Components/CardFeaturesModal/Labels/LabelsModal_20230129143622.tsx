import { useEffect, useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useContext } from 'react';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import { LabelContext } from '../../../lib/context/LabelContext/LabelContext';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import LabelOption from './LabelOption';
import { IUpdateData, ILabelOption, ILabels } from '../../../interfaces/data';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { featureStore } from '../../../store/featureStore';
import { useGetLabels } from '../../../lib/hooks/labels/useGetLabels';
import { ILabel } from '../../../interfaces/label.interface';
import {
  getLocalStorage,
  setLocalStorage,
} from '../../../lib/utils/localStorage';
// import { FeatureContext } from '../../../lib/context/FeatureContext/FeatureContext';

const LabelsModal = () => {
  // Context
  const { dispatchFeature } = useContext(FeatureContext);

  // Local state
  const [createLabel, setCreateLabel] = useState<boolean>(false);
  const { labelState, dispatchLabel } = useContext(LabelContext);
  const [searchLabel, setSearchLabel] = useState<string | undefined>('');
  const [filteredList, setFilteredList] = useState<ILabels[]>(labelState);

  // Handlers
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.currentTarget.dataset.id;
    dispatchLabel({
      type: 'LABEL_TOGGLE',
      payload: id,
    });
  };

  const onLabelOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: id,
    });
  };

  const onLabelUpdateHandler = (data: IUpdateData) => {
    dispatchLabel({
      type: 'UPDATE_LABEL',
      payload: data,
    });
  };

  const onCreateLabelHandler = (data: ILabelOption) => {
    dispatchLabel({
      type: 'CREATE_LABEL',
      payload: data,
    });
    setCreateLabel(!createLabel);
  };

  const onDeleteLabelHandler = (id: string) => {
    dispatchLabel({
      type: 'DELETE_LABEL',
      payload: id,
    });
  };

  const openLabelOptionHandler = () => {
    setCreateLabel(!createLabel);
  };

  const onExitBtnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const effect = event.currentTarget.dataset.effect;
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: effect },
    });
  };

  const onSearchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
  };

  // Updated
  const { toggleFeatureModal } = featureStore((state) => ({
    toggleFeatureModal: state.toggleFeatureModal,
  }));

  const closeLabelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleFeatureModal(_id);
  };

  const { data: labelData, isError, isSuccess, isFetching } = useGetLabels();

  const labelOptionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = String(event.currentTarget.dataset.id);
    console.log(id);
    setLocalStorage('labelOptionId', id);
  };

  const [labelOptionId, setLabelOptionId] = useState('');

  useEffect(() => {
    setLabelOptionId(getLocalStorage('labelOptionId'));
    console.log(labelOptionId);
  }, [labelOptionId]);

  return (
    <div className='absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal
        title='Labels'
        id='labels-option'
        idFeature='labels-option'
        leftBtn={false}
        exitBtnHandler={closeLabelHandler}
      />
      <input
        type='text'
        data-id='search-label'
        name='search-label'
        value={searchLabel}
        className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
        placeholder='Search labels...'
        onChange={onSearchChangeHandler}
      />
      <section className='space-y-2'>
        <h4 className='text-xs font-semibold'>Labels</h4>
        <ul className='grid grid-cols-1 gap-1.5'>
          {labelData.map(
            ({
              _id,
              bgColor,
              bgColorStrip,
              bgColorHover,
              name,
              iconColor,
              isChecked,
            }: // isOpen,
            ILabel) => {
              return (
                <li
                  key={_id}
                  className='flex flex-row justify-center items-center gap-2'
                >
                  <div className='flex flex-row justify-center items-center w-full gap-2'>
                    <input
                      type='checkbox'
                      data-id={_id}
                      name={name}
                      value={name}
                      checked={isChecked}
                      onChange={onChangeHandler}
                    />
                    <DefaultBtn
                      id={_id}
                      bgColor={bgColor}
                      bgColorHover={bgColorHover}
                      name={name}
                      iconColor={iconColor}
                      icon={faCircle}
                      fullWidth={true}
                      isDisabled={true}
                    />
                  </div>

                  <button
                    type='button'
                    data-id={_id}
                    onClick={labelOptionHandler}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} size='1x' />
                  </button>
                  {labelOptionId === _id && (
                    <LabelOption
                      id={_id}
                      bgColor={bgColor}
                      bgColorHover={bgColorHover}
                      bgColorStrip={bgColorStrip}
                      name={name}
                      iconColor={iconColor}
                      icon={faCircle}
                      fullWidth={true}
                      isDisabled={true}
                      isCreate={false}
                      onUpdateData={onLabelUpdateHandler}
                      onDeleteLabel={onDeleteLabelHandler}
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
              id='create-back-btn'
              bgColor='bg-green-400'
              bgColorStrip='bg-green-600'
              iconColor='text-green-600'
              name=''
              icon={faCircle}
              fullWidth={true}
              isDisabled={true}
              isCreate={true}
              openLabelOption={openLabelOptionHandler}
              onCreateData={onCreateLabelHandler}
            />
          )}
        </ul>
      </section>
    </div>
  );
};
export default LabelsModal;
