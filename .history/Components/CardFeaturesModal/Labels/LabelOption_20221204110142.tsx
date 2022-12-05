import { ILabels } from '../../../interfaces/data';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import { LabelColors } from './LabelColors';

const LabelOption = ({
  id,
  bgColor,
  name,
  iconColor,
  faCircle,
  isDisabled,
}: ILabels) => {
  return (
    <div className='absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal
        title='Create label'
        idLeft='labels-option'
        idX='labels-sub-option'
        leftBtn={true}
      />
      <section className='flex justify-center items-center h-28 px-4'>
        <DefaultBtn
          id={id}
          bgColor={bgColor}
          name={name}
          iconColor={iconColor}
          icon={faCircle}
          fullWidth={true}
          isDisabled={true}
        />
      </section>
      <section className='flex flex-col gap-2'>
        <h3>Title</h3>
        <input
          type='text'
          className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
          placeholder='Search labels...'
        />
      </section>
      <section>
        <h3>Select a color</h3>
        <ul className='grid grid-rows-6 grid-flows-col gap-2'>
          {LabelColors.map((item) => {
            return <li key={item.id} className={`bg-${item.bgColor}`} />;
          })}
        </ul>
      </section>
    </div>
  );
};
export default LabelOption;
