import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { FeatureContext } from '../../lib/context/FeatureContext/featureProvider';
import { LabelContext } from '../../lib/context/LabelContext/LabelContext';
import DefaultBtn from '../../UI/Buttons/DefaultBtn';

const Labels = () => {
  const { labelState } = useContext(LabelContext);
  const { dispatchFeature } = useContext(FeatureContext);

  // Event Handler
  const addLabelHandler = () => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: 'labels-option' },
    });
  };

  return (
    <div className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <ul className='flex flex-row gap-2'>
        {labelState.map(({ id, bgColor, name, iconColor, isChecked }) => {
          return (
            isChecked && (
              <li key={id}>
                <DefaultBtn
                  bgColor={bgColor}
                  name={name}
                  iconColor={iconColor}
                  icon={faCircle}
                  fullWidth={false}
                  isDisabled={true}
                />
              </li>
            )
          );
        })}
        <li>
          <DefaultBtn
            bgColor='bg-gray-200'
            icon={faPlus}
            iconColor='text-gray-800'
            bgColorHover='hover:bg-gray-300'
            onClick={addLabelHandler}
            isDisabled={false}
          />
        </li>
      </ul>
    </div>
  );
};
export default Labels;
