import { ChangeEvent, useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { ILabelColors, ILabelOption } from '../../../interfaces/data';
// import { FeatureContext } from '../../../lib/context/FeatureContext/FeatureContext';
import { useCreateLabel } from '../../../lib/hooks/labels/useCreateLabel';
import { useDeleteLabel } from '../../../lib/hooks/labels/useDeleteLabel';
import { useGetLabels } from '../../../lib/hooks/labels/useGetLabels';
import { useUpdateLabel } from '../../../lib/hooks/labels/useUpdateLabel';
import { capitalizeFirstLetter } from '../../../lib/utils/captitalizeString';
import { getLocalStorage } from '../../../lib/utils/localStorage';
import { cardIdStore } from '../../../store/cardStore';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import { filteredColors } from './filteredLabelColors';
import { LabelColors } from './LabelColors';

const LabelOption = ({
  id,
  bgColor,
  bgColorStrip,
  bgColorHover,
  name,
  iconColor,
  icon,
  isDisabled,
  isCreate,
  backBtn,
  exitBtn,
}: ILabelOption) => {
  const color = {
    bgColor: bgColor,
    iconColor: iconColor,
    bgColorStrip: bgColorStrip,
    bgColorHover,
  };

  // Local state
  const [colorBg, setColorBg] = useState<string | undefined>(color.bgColor);
  const [colorIcon, setColorIcon] = useState<string | undefined>(
    color.iconColor
  );
  const [colorBgStrip, setColorBgStrip] = useState<string | undefined>(
    color.bgColorStrip
  );
  const [colorBgHover, setColorBgHover] = useState<string | undefined>(
    color.bgColorHover
  );
  const [colorChoices, setColorChoices] = useState<ILabelColors[]>([]);
  const [createTitle, setCreateTitle] = useState(name);

  const data = {
    bgColor: String(colorBg),
    iconColor: String(colorIcon),
    bgColorStrip: String(colorBgStrip),
    bgColorHover: String(colorBgHover),
    isChecked: false,
  };

  // Card id global store
  const { idCard } = cardIdStore(
    (state) => ({
      idCard: state.idCard,
    }),
    shallow
  );

  // Updated

  const { refetch } = useGetLabels();

  const {
    mutateAsync,
    isLoading: isCreateLoading,
    isSuccess: isCreateSuccess,
  } = useCreateLabel();
  const {
    mutateAsync: updateMutate,
    isSuccess: isUpdateSuccess,
    isLoading: isUpdateLoading,
  } = useUpdateLabel();
  const {
    mutateAsync: deleteMutate,
    isSuccess: isDeleteSuccess,
    isLoading: isDeleteLoading,
  } = useDeleteLabel();

  const createLabel = async () => {
    const idBoard = getLocalStorage('idBoard');
    // const idCard = getLocalStorage('idCard');
    await mutateAsync({
      ...data,
      idBoard,
      idCard,
      name: capitalizeFirstLetter(String(createTitle)),
    });
  };

  const updateLabel = async () => {
    await updateMutate({
      ...data,
      name: capitalizeFirstLetter(String(createTitle)),
    });
  };

  const deleteLabel = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = String(event.currentTarget.dataset.id);
    await deleteMutate(id);
  };

  useEffect(() => {
    if (isUpdateSuccess || isDeleteSuccess || isCreateSuccess) backBtn();
  }, [backBtn, isCreateSuccess, isDeleteSuccess, isUpdateSuccess]);

  // Handlers

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(event.target.value);
  };

  const labelColorHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const idColor = event.currentTarget.dataset.id;
    setColorChoices((prevColors) => {
      const updated = prevColors.map((item) => {
        return item.id === idColor
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      });
      return updated;
    });
  };

  useEffect(() => {
    const filteredLabelColors = filteredColors({ LabelColors, colorBg });
    // const timeout = setTimeout(() => {
    //   setColorChoices(filteredLabelColors);
    // }, 1000);
    // return () => clearTimeout(timeout);
    setColorChoices(filteredLabelColors);
  }, [colorBg]);

  useEffect(() => {
    const currentBgColor = colorChoices.find((item) => item.isActive);
    if (currentBgColor) {
      const { bgColor, iconColor, bgColorStrip, bgHoverColor } = currentBgColor;
      setColorBg(bgColor);
      setColorIcon(iconColor);
      setColorBgStrip(bgColorStrip);
      setColorBgHover(bgHoverColor);
    }
  }, [colorChoices]);

  return (
    <div className='z-20 absolute top-0 sm:-top-32 left-0 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal
        title='Create label'
        id={id}
        idFeature='labels-option'
        leftBtn={true}
        backBtnHandler={backBtn}
        exitBtnHandler={exitBtn}
      />
      <section className='flex justify-center items-center h-28 px-4 bg-gray-100'>
        <DefaultBtn
          id={id}
          bgColor={colorBg}
          bgColorHover={colorBgHover}
          name={createTitle}
          iconColor={colorIcon}
          icon={icon}
          fullWidth={true}
          isDisabled={isDisabled}
        />
      </section>
      <section className='flex flex-col gap-2'>
        <h3 className='text-xs'>Title</h3>
        <input
          type='text'
          id='createTitle'
          name='createTitle'
          className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
          placeholder={isCreate ? 'Title' : name}
          onChange={changeTitleHandler}
          value={createTitle}
        />
      </section>
      <section className='space-y-2'>
        <h3 className='text-xs'>Select a color</h3>
        <ul className='grid grid-rows-6 grid-flow-col gap-x-2 gap-y-1'>
          {colorChoices.map((item) => {
            return (
              <li key={item.id}>
                <button
                  data-id={item.id}
                  type='button'
                  title={item.id}
                  className={`${item.bgColor} ${item.bgHoverColor} ${
                    item.isActive && 'box-border border-2 border-blue-500'
                  } h-7 rounded-sm w-full`}
                  onClick={labelColorHandler}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <button
        type='button'
        title='Labels without a color selected will only appear on the card back'
        className='bg-gray-300 text-sm py-1.5 hover:bg-gray-400'
      >
        Remove color
      </button>
      <section className='flex flex-row justify-between'>
        {isCreate ? (
          <button
            data-id={id}
            type='button'
            disabled={isCreateLoading}
            className='flex justify-center items-center bg-blue-600 w-20 py-1 text-sm text-white rounded-sm'
            onClick={createLabel}
          >
            {isCreateLoading ? 'Creating...' : 'Create'}
          </button>
        ) : null}
        {!isCreate ? (
          <button
            data-id={id}
            type='button'
            disabled={isUpdateLoading}
            className='flex justify-center items-center bg-blue-600 w-20 py-1 text-sm text-white rounded-sm'
            onClick={updateLabel}
          >
            {isUpdateLoading ? 'Saving...' : 'Save'}
          </button>
        ) : null}
        {!isCreate && (
          <button
            data-id={id}
            type='button'
            disabled={isUpdateLoading}
            className='flex justify-center items-center bg-red-600 w-20 py-1 text-sm text-white rounded-sm'
            onClick={deleteLabel}
          >
            {isDeleteLoading ? 'Deleting...' : 'Delete'}
          </button>
        )}
      </section>
    </div>
  );
};
export default LabelOption;
