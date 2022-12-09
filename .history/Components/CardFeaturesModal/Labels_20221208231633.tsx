import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { LabelContext } from '../../lib/context/LabelContext/LabelContext';
import DefaultBtn from '../../UI/Buttons/DefaultBtn';

const Labels = () => {
  const { labelState } = useContext(LabelContext);
  return (
    <div className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <ul className='flex flex-row gap-2'>
        {labelState.map(
          ({ id, bgColor, bgColorHover, name, iconColor, isChecked }) => {
            return (
              isChecked && (
                <li key={id}>
                  <DefaultBtn
                    bgColor={bgColor}
                    bgColorHover={bgColorHover}
                    name={name}
                    iconColor={iconColor}
                    icon={faCircle}
                    fullWidth={false}
                  />
                </li>
              )
            );
          }
        )}
        <li>
          <DefaultBtn
            bgColor='bg-gray-200'
            icon={faPlus}
            iconColor='text-gray-800'
            bgColorHover='bg-gray-300'
          />
        </li>
      </ul>
    </div>
  );
};
export default Labels;
