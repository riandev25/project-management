import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FeatureDisplayHeader } from '../../UI/Feature/FeatureDisplayHeader';

const DATA = [
  {
    description: 'Determine appropriate naming scheme',
    isChecked: false,
  },
];

const Checklist = () => {
  return (
    <div className='flex flex-col gap-4'>
      <FeatureDisplayHeader
        icon={faListCheck}
        title='Checklist'
        btnTitle='Delete'
      />
      <div>
        <section className='flex flex-row justify-center items-center gap-4'>
          <h3 className='text-xs px-1'>0%</h3>
          <div className='w-full h-2.5 rounded-full bg-gray-300' />
        </section>
        <ul className='flex flex-col'>
          {DATA.map((item, i) => {
            return (
              <li key={i} className='flex flex-row gap-4'>
                <input
                  type='checkbox'
                  className='w-5 mx-1'
                  checked={item.isChecked}
                />
                <h2 className='w-full text-sm'>{item.description}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Checklist;
