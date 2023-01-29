import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { is } from 'immer/dist/internal';
import { useContext } from 'react';
import { IBoardCardData } from '../../../interfaces/board.interface';
import { ILabel } from '../../../interfaces/label.interface';
import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { LabelContext } from '../../../lib/context/LabelContext/LabelContext';
import { useGetLabels } from '../../../lib/hooks/labels/useGetLabels';
import { featureStore } from '../../../store/featureStore';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import LabelFetching from './LabelFetching';

const Labels = ({ _id: idCard }: IBoardCardData) => {
  // const { labelState } = useContext(LabelContext);
  // const { dispatchFeature } = useContext(FeatureContext);

  // Event Handler
  // const addLabelHandler = () => {
  //   dispatchFeature({
  //     type: 'TOGGLE_FEATURE',
  //     payload: { id: 'labels-option' },
  //   });
  // };

  const { toggleFeatureModal } = featureStore((state) => ({
    toggleFeatureModal: state.toggleFeatureModal,
  }));

  const addLabelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const _id = String(event.currentTarget.dataset.id);
    toggleFeatureModal(_id);
  };

  const { data: labelData, isError, isSuccess, isFetching } = useGetLabels();

  if (isError) return <p>Error</p>;

  if (isFetching) return <LabelFetching />;

  console.log(labelData);

  return (
    <div className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <ul className='flex flex-row gap-2'>
        {labelData.map(
          ({ _id, bgColor, name, iconColor, isChecked }: ILabel) => {
            return (
              isChecked && (
                <li key={_id}>
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
          }
        )}
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
