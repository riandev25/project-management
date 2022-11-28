import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import AddCard from '../AddCard/AddCard';

// const CARDS_LIST = [
//   {
//     id: 1,
//     title: 'Backlog',
//     children: [
//       {
//         id: 1,
//         desc: 'ASD',
//         labels: [
//           {
//             id: 1,
//             color: 'green'
//           }
//         ]
//       }
//     ]
//   }
// ]

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
