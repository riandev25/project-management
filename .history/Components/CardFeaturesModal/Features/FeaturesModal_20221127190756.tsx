import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultBtn from '../../../UI/Buttons/DefaultBtn';

const LABEL_FEATURE_LIST = [
  {
    id: 'meta-btn',
    name: 'Meta',
    bgColor: 'bg-green-100 hover:bg-green-200',
    iconColor: 'bg-green-800',
  },
];

const FeaturesModal = () => {
  return (
    <div>
      <header>
        <h3>Labels</h3>
        <button type='button'>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <input type='text' placeholder='Search labels...' />
        <section>
          <h4>Label</h4>
          <ul>
            {LABEL_FEATURE_LIST.map(({ id, bgColor, name, iconColor }) => {
              return (
                <li key={id}>
                  <DefaultBtn
                    bgColor={bgColor}
                    name={name}
                    iconColor={iconColor}
                    icon={faCircle}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </header>
    </div>
  );
};
export default FeaturesModal;
