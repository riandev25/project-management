import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FeatureDisplayHeader } from '../../UI/Feature/FeatureDisplayHeader';

const Checklist = () => {
  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        icon={faListCheck}
        title='Checklist'
        btnTitle='Delete'
      />
      <div>
        <section className='flex flex-row items-center justify-center gap-4'>
          <h3 className='text-xs'>0%</h3>
          <div className=' w-full h-3 bg-gray-300' />
        </section>
      </div>
    </div>
  );
};
export default Checklist;
