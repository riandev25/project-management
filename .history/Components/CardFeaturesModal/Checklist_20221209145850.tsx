import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import NoIconBtn from '../../UI/Buttons/NoIconBtn';
import { FeatureDisplayHeader } from '../../UI/Feature/FeatureDisplayHeader';

const DATA = [
  {
    description: 'Determine appropriate naming scheme (Due 8/9)',
    isChecked: false,
  },
  {
    description: 'Fix a bug (Due 9/9)',
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
      <div className='flex flex-col gap-1'>
        <section className='flex flex-row justify-center items-center gap-4'>
          <h3 className='text-xs px-1'>0%</h3>
          <div className='w-full h-2 rounded-full bg-gray-300' />
        </section>
        <ul className='flex flex-col'>
          {DATA.map((item, i) => {
            return (
              <li key={i} className='flex flex-row py-2 justify-center gap-4'>
                <input
                  type='checkbox'
                  className='w-5 mx-1'
                  checked={item.isChecked}
                />
                <h2 className='w-full text-sm'>{item.description}</h2>
              </li>
            );
          })}
          <li className='py-1.5 translate-x-10'>
            <NoIconBtn
              id='add-checklist-item'
              bgColor='bg-gray-200'
              bgColorHover='bg-gray-300'
              name='Add an item'
              fullWidth={false}
              isDisabled={false}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Checklist;
