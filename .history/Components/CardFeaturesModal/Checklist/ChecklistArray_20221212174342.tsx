import { useContext } from 'react';
import { ChecklistContext } from '../../lib/context/ChecklistContext/ChecklistContext';
import Checklist from './Checklist/Checklist';

// export interface IChecklistArray {
//   title: string;
//   percentage: number;
//   checkListData: IChecklist[];
// }

// export interface IChecklist {
//   description: string;
//   isChecked: boolean;
// }

const ChecklistArray = () => {
  const DATA = [
    {
      title: 'Checklist',
      percentage: 0,
      checkListData: [
        {
          description: 'Determine appropriate naming scheme (Due 8/9)',
          isChecked: false,
        },
        {
          description: 'Fix a bug (Due 9/9)',
          isChecked: false,
        },
      ],
    },
  ];

  const { checklistData } = useContext(ChecklistContext);

  return (
    <ul className='flex flex-col gap-8'>
      {checklistData.map((item, i) => {
        return (
          <li key={i}>
            <Checklist
              id={i}
              title={item.title}
              percentage={item.percentage}
              checklistItems={item.checklistItems}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ChecklistArray;
