import Card from '../Card/Card';
import BoardHeader from './BoardHeader';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import AddCard from './AddCard';

// const CARDS_LIST = [
//   {
//     id: 1,
//     title: 'Backlog',
//     desc: '',
//     attachment: [
//       {
//         name: 'github',
//         icon: faPaperclip,

//       }
//     ]
//     children: [

//     ]
//   }
// ]

const BoardComponent = () => {
  return (
    <div className='flex flex-col gap-3'>
      <BoardHeader />
      <section>
        <Card />
        <AddCard />
      </section>
    </div>
  );
};

export default BoardComponent;
