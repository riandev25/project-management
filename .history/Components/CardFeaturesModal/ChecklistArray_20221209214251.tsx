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
    <div>
      <ul>
        {checklistData.map((item, i) => {
          return (
            <li key={i}>
              <Checklist
                title={item.title}
                percentage={item.percentage}
                checkListData={item.checkListData}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChecklistArray;
