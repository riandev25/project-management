import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ILabel } from '../../../interfaces/label.interface';
import { useGetLabels } from '../../../lib/hooks/labels/useGetLabels';
import { featureStore } from '../../../store/featureStore';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import LabelFetching from './LabelFetching';

const Labels = () => {
  const { toggleFeatureModal } = featureStore((state) => ({
    toggleFeatureModal: state.toggleFeatureModal,
  }));

  const { data: labelData, isError, isLoading } = useGetLabels();

  console.log(labelData);

  if (isError) return <p>Error</p>;

  if (isLoading) return <LabelFetching />;

  if (!labelData) {
    return <p></p>;
  }
  return (
    <div className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <ul className='flex flex-row gap-2'>
        {labelData.map(
          ({ _id, bgColor, name, iconColor, isChecked }: ILabel, i: number) => {
            return (
              isChecked && (
                <li key={i}>
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
            id='labels-option'
            bgColor='bg-gray-200'
            icon={faPlus}
            iconColor='text-gray-800'
            bgColorHover='hover:bg-gray-300'
            onClick={toggleFeatureModal}
            isDisabled={false}
          />
        </li>
      </ul>
    </div>
  );
};
export default Labels;
