import { useState } from 'react';
import {
  ILabelColorProp,
  ILabelColors,
  ILabels,
} from '../../../interfaces/data';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import { filteredColors } from './filteredLabelColors';
import { LabelColors } from './LabelColors';

const LabelOption = ({
  id,
  bgColor,
  bgColorHover,
  name,
  iconColor,
  icon,
  isDisabled,
}: ILabels) => {
  const [colorBg, setColorBg] = useState(bgColor);

  const filteredLabelColors = filteredColors({ LabelColors, colorBg });

  console.log(filteredLabelColors);
  return (
    <div className='z-20 absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal title='Create label' id={id} leftBtn={true} />
      <section className='flex justify-center items-center h-28 px-4 bg-gray-100'>
        <DefaultBtn
          id={id}
          bgColor={colorBg}
          bgColorHover={bgColorHover}
          name={name}
          iconColor={iconColor}
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
          {filteredLabelColors.map((item) => {
            return (
              <li key={item.id}>
                <button
                  type='button'
                  title={id}
                  className={`${item.bgColor} ${item.bgHoverColor} ${
                    item.isActive && 'border-3 outline-offset-8 border-blue-500'
                  } h-7 rounded-sm w-full`}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default LabelOption;
