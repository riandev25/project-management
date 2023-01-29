import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { string } from 'yup';
import { ILabelColors, ILabelOption, ILabels } from '../../../interfaces/data';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
// import { FeatureContext } from '../../../lib/context/FeatureContext/FeatureContext';
import { LabelContext } from '../../../lib/context/LabelContext/LabelContext';
import { useCreateLabel } from '../../../lib/hooks/labels/useCreateLabel';
import useLabelOption from '../../../lib/hooks/labels/useLabelOption';
import { useUpdateLabel } from '../../../lib/hooks/labels/useUpdateLabel';
import { getLocalStorage } from '../../../lib/utils/localStorage';
import { labelStore } from '../../../store/labelStore';
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
  openLabelOption, // REVIEW TYPESCRIPT
  onUpdateData,
  onCreateData,
  onDeleteLabel,
  backBtn,
  exitBtn,
  isChecked,
}: ILabelOption) => {
  const color = {
    bgColor: bgColor,
    iconColor: iconColor,
    bgColorStrip: bgColorStrip,
    bgColorHover,
  };

  // Contexts
  const { dispatchLabel } = useContext(LabelContext);
  const { dispatchFeature } = useContext(FeatureContext);

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

  // Updated

  const { mutateAsync } = useCreateLabel();
  const { mutateAsync: updateMutate } = useUpdateLabel();

  const createLabel = async () => {
    const idBoard = getLocalStorage('idBoard');
    const idCard = getLocalStorage('idCard');
    // console.log({ ...data, name: String(createTitle) });
    const res = await mutateAsync({
      ...data,
      idBoard,
      idCard,
      name: String(createTitle),
    });
  };

  const updateLabel = async () => {
    const checked = isChecked ? false : true;
    const idBoard = getLocalStorage('idBoard');
    const idCard = getLocalStorage('idCard');
    const res = await updateMutate({
      ...data,
      idBoard,
      idCard,
      isChecked: checked,
      name: String(createTitle),
    });
    console.log(res);
  };

  // Handlers
  // const backBtnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   // const id = String(event.currentTarget.dataset.id);
  //   // if (id === 'create-back-btn') {
  //   //   openLabelOption();
  //   // } else {
  //   //   dispatchLabel({
  //   //     type: 'LABEL_OPTION_TOGGLE',
  //   //     payload: id,
  //   //   });
  //   // }
  //   backBtn();
  // };

  // const exitBtnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const id = String(event.currentTarget.dataset.id);
  //   dispatchLabel({
  //     type: 'LABEL_OPTION_TOGGLE',
  //     payload: id,
  //   });

  //   dispatchFeature({
  //     type: 'TOGGLE_FEATURE',
  //     payload: { id: id },
  //   });
  // };

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(event.target.value);
    console.log(event.target.value);
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

  // const updateLabel = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const id = event.currentTarget.dataset.id;
  //   onUpdateData({ ...data, id: id, name: createTitle });
  //   dispatchLabel({
  //     type: 'LABEL_OPTION_TOGGLE',
  //     payload: id,
  //   });
  // };

  // const createLabel = () => {
  //   onCreateData({ ...data, name: createTitle });
  // };

  const deleteLabel = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    onDeleteLabel(id);
  };

  useEffect(() => {
    const filteredLabelColors = filteredColors({ LabelColors, colorBg });
    const timeout = setTimeout(() => {
      setColorChoices(filteredLabelColors);
    }, 1000);
    return () => clearTimeout(timeout);
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
    <div className='z-20 absolute -top-32 left-0 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
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
        <button
          data-id={id}
          type='button'
          className='flex justify-center items-center bg-blue-600 w-16 py-1 text-sm text-white rounded-sm'
          onClick={isCreate ? createLabel : updateLabel}
        >
          {isCreate ? 'Create' : 'Save'}
        </button>
        {!isCreate && (
          <button
            data-id={id}
            type='button'
            className='flex justify-center items-center bg-red-600 w-16 py-1 text-sm text-white rounded-sm'
            onClick={deleteLabel}
          >
            Delete
          </button>
        )}
      </section>
    </div>
  );
};
export default LabelOption;
