import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import AddCard from '../AddCard/AddCard';

const CARDS_LIST = [
  {
    title: 'Backlog',
    children: [
      {
        title:
          'Clicking the collection beneath a board should filter by collection, not open collections pop-over',
        desc: 'Paragpraph description',
        labels: [
          {
            id: 'meta-btn',
            name: 'Meta',
            bgColor: 'bg-green-200 hover:bg-green-300',
            iconColor: 'bg-green-500',
          },
        ],
      },
    ],
  },
];

const BoardComponent = () => {
  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <section className='flex flex-row items-start gap-4'>
        <Card />
        <AddCard />
      </section>
    </div>
  );
};

export default BoardComponent;
