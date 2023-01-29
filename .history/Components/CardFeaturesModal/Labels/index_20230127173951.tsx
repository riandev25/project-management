import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { is } from 'immer/dist/internal';
import { useContext } from 'react';
import { IBoardCardData } from '../../../interfaces/board.interface';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { LabelContext } from '../../../lib/context/LabelContext/LabelContext';
import { useGetLabels } from '../../../lib/hooks/labels/useGetLabels';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';

const Labels = ({ _id: idCard }: IBoardCardData) => {
  const { labelState } = useContext(LabelContext);
  const { dispatchFeature } = useContext(FeatureContext);

  // Event Handler
  const addLabelHandler = () => {
    dispatchFeature({
      type: 'TOGGLE_FEATURE',
      payload: { id: 'labels-option' },
    });
  };

  const { data, isError, isSuccess, isFetching } = useGetLabels();

  if (isError) return <p>Error</p>;

  if (isFetching) return;

  const a = [
    {
      id: 'Meta-btn',
      name: 'Meta',
      bgColorStrip: 'bg-green-400',
      bgColor: 'bg-green-300',
      bgColorHover: 'hover:bg-green-400',
      iconColor: 'text-green-500',
      isChecked: true,
      isOpen: false,
    },
  ];

  if (isSuccess) console.log(data);

  return (
    <div className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <ul className='flex flex-row gap-2'>
        {a.map(({ id, bgColor, name, iconColor, isChecked }) => {
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
