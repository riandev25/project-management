import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import AddCard from '../AddCard/AddCard';
const BoardComponent = () => {
  // const initialData = useContext(ProjectDataContext);
  let data = [
    {
      cardTitle: 'Backlog',
      cardChildren: [
        {
          childTitle:
            'Clicking the collection beneath a board should filter by collection, not open collections pop-over',
          desc: 'Paragpraph description',
          labels: [
            {
              id: 'meta-btn',
              name: 'Meta',
              bgColorStrip: 'bg-green-500',
              bgColor: 'bg-green-200 hover:bg-green-300',
              iconColor: 'text-green-500',
              isChecked: true,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <ul className='flex flex-row items-start gap-4'>
        {data.map(({ cardTitle, cardChildren }) => {
          return (
            <li key={cardTitle}>
              <Card cardTitle={cardTitle} cardChildren={cardChildren} />
            </li>
          );
        })}

        <li>
          <AddCard />
        </li>
      </ul>
    </div>
  );
};

export default BoardComponent;
