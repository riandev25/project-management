import DefaultBtn from '../../../UI/Buttons/DefaultBtn';
import { ILabel } from '../../../interfaces/label.interface';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    id: '',
    name: '',
    bgColorStrip: 'bg-green-400',
    bgColor: 'bg-green-300',
    bgColorHover: 'hover:bg-green-400',
    iconColor: 'text-green-500',
    isChecked: true,
    isOpen: false,
  },
];

const LabelFetching = () => {
  return (
    <div className='flex flex-col justify-start px-10 gap-2'>
      <header>
        <h3 className='text-xs'>Labels</h3>
      </header>
      <ul className='flex flex-row gap-2'>
        {data.map(({ _id, bgColor, name, iconColor, isChecked }: any) => {
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
        })}
      </ul>
    </div>
  );
};

export default LabelFetching;
