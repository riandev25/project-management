import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import HeaderModal from '../../../UI/Feature/HeaderModal';

const LabelOption = () => {
  return (
    <div className='absolute flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'>
      <HeaderModal
        title='Create label'
        idLeft='labels-option'
        idX='labels-sub-option'
        leftBtn={true}
      />
      <section className='flex justify-center items-center'>
        {/* <DefaultBtn /> */}
      </section>
    </div>
  );
};
export default LabelOption;
