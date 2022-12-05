import CardChild from './CardChild';

const Card = () => {
  return (
    <div className='flex flex-col w-24 gap-1 bg-gray-200 '>
      <h2>Backlog</h2>
      <section className='flex flex-col gap-[2px]'>
        <CardChild />
      </section>
    </div>
  );
};

export default Card;