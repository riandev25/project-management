import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { CardChildren } from '../../interfaces/data';
import { LabelContext } from '../../lib/context/LabelContext/LabelContext';
import DefaultBtn from '../../UI/Buttons/DefaultBtn';

const Labels = ({ labelsDisplay }: CardChildren) => {
  const { labelsState } = useContext(LabelContext);
  return (
    <div className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <ul className='flex flex-row gap-2'>
        {labelsState.map(({ id, bgColor, name, iconColor, isChecked }) => {
          return (
            <li key={id}>
              <DefaultBtn
                bgColor={bgColor}
                name={name}
                iconColor={iconColor}
                icon={faCircle}
                fullWidth={false}
              />
            </li>
          );
        })}
        <li>
          <DefaultBtn
            bgColor='bg-gray-100'
            icon={faPlus}
            iconColor='text-gray-800'
          />
        </li>
      </ul>
    </div>
  );
};
export default Labels;
