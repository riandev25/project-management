import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Description from './Description';
import FeaturesHeader from './FeaturesHeader';
import Labels from './Labels';

const CardFeaturesModal = () => {
  return (
    <div className='z-10 flex flex-col max-w-3xl py-6 px-5 gap-6 bg-white text-gray-600'>
      <FeaturesHeader />
      <div>
        <section className='flex flex-col gap-5'>
          <Labels />
          <Description />
        </section>
      </div>
    </div>
  );
};
export default CardFeaturesModal;
