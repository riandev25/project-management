import CardChild from './CardChild';

const Card = () => {
  return (
    <div className='flex flex-col w-72 gap-1 bg-gray-200 px-2'>
      <h2 className='py-2'>Backlog</h2>
      <section className='flex flex-col gap-[2px]'>
        <CardChild />
      </section>
    </div>
  );
};

export default Card;
