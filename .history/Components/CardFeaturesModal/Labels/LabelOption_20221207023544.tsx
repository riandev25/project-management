import { useContext, useEffect, useState } from 'react';
import { ILabelColors, ILabels } from '../../../interfaces/data';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
// import { FeatureContext } from '../../../lib/context/FeatureContext/FeatureContext';
import { LabelContext } from '../../../lib/context/LabelContext/LabelContext';
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
  onUpdateData,
}: ILabels) => {
  const color = {
    bgColor: bgColor,
    iconColor: iconColor,
    bgColorStrip: bgColorStrip,
  };

  // const { openFeatureModal } = useContext(FeatureContext);
  const { dispatchLabel } = useContext(LabelContext);
  const { dispatchFeature } = useContext(FeatureContext);

  const [colorBg, setColorBg] = useState<string | undefined>(color.bgColor);
  const [colorIcon, setColorIcon] = useState<string | undefined>(
    color.iconColor
  );
  const [colorBgStrip, setColorBgStrip] = useState<string | undefined>(
    color.bgColorStrip
  );
  const [colorChoices, setColorChoices] = useState<ILabelColors[]>([]);

  const data = {
    colorBg: colorBg,
    colorIcon: colorIcon,
    colorBgStrip: colorBgStrip,
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

  const updateLabel = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    const updatedData = {
      id: id,
      data: data,
    };
    onUpdateData(updatedData);
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: id,
    });
  };

  useEffect(() => {
    const filteredLabelColors = filteredColors({ LabelColors, colorBg });
    const timeout = setTimeout(() => {
      setColorChoices(filteredLabelColors);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [colorBg]);

  useEffect(() => {
    const currentBgColor = colorChoices.find((item) => item.isActive);
    if (currentBgColor) {
      const { bgColor, iconColor, bgColorStrip } = currentBgColor;
      setColorBg(bgColor);
      setColorIcon(iconColor);
      setColorBgStrip(bgColorStrip);
    }
  }, [colorChoices]);

  const backBtnHandler = (id: string) => {
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: id,
    });
  };

  const exitBtnHandler = (id: string, effect: string) => {
    dispatchLabel({
      type: 'LABEL_OPTION_TOGGLE',
      payload: id,
    });

    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: effect },
    });
  };

  return (
    <div className='z-20 absolute -top-32 left-0 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal
        title='Create label'
        id={id}
        idFeature='labels-option'
        leftBtn={true}
        backBtnHandler={backBtnHandler}
        exitBtnHandler={exitBtnHandler}
      />
      <section className='flex justify-center items-center h-28 px-4 bg-gray-100'>
        <DefaultBtn
          id={id}
          bgColor={colorBg}
          bgColorHover={bgColorHover}
          name={name}
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
          className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
          placeholder='Search labels...'
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
          onClick={updateLabel}
        >
          Save
        </button>
        <button
          type='button'
          className='flex justify-center items-center bg-red-600 w-16 py-1 text-sm text-white rounded-sm'
        >
          Delete
        </button>
      </section>
    </div>
  );
};
export default LabelOption;
