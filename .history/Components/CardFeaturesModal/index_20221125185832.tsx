import Description from './Description';
import FeaturesHeader from './FeaturesHeader';
import Labels from './Labels';
import Features from './Features';

const CardFeaturesModal = () => {
  return (
    <div className='z-10 flex flex-col max-w-3xl py-6 px-5 gap-6 bg-white text-gray-600'>
      <FeaturesHeader />
      <div className='flex flex-row gap-2'>
        <section className='flex flex-col flex-1 gap-5'>
          <Labels />
          <Description />
        </section>
        <section className='flex flex-col gap-4 w-40'>
          <Features />
        </section>
      </div>
    </div>
  );
};
export default CardFeaturesModal;
