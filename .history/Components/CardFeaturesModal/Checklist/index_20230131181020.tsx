import { useContext } from 'react';
import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
import { useGetCheckitems } from '../../../lib/hooks/checklist/useGetCheckitems';
import { useGetChecklists } from '../../../lib/hooks/checklist/useGetChecklists';
import { useGetData } from '../../../lib/hooks/dataFetching/useGetData';
import { combinedChecklist } from '../../../lib/utils/combinedChecklist';
import checklistService from '../../../services/checklistService';
import Checklist from './Checklist';

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
  // const DATA = [
  //   {
  //     title: 'Checklist',
  //     percentage: 0,
  //     checkListData: [
  //       {
  //         description: 'Determine appropriate naming scheme (Due 8/9)',
  //         isChecked: false,
  //       },
  //       {
  //         description: 'Fix a bug (Due 9/9)',
  //         isChecked: false,
  //       },
  //     ],
  //   },
  // ];

  const data = [
    {
      id: 0,
      title: 'Checklist',
      percentage: 0,
      checklistItems: [
        {
          id: 0,
          description: 'Determine appropriate naming scheme (Due 8/9)',
          isChecked: false,
          isOptionOpen: false,
        },
        {
          id: 1,
          description: 'Fix a bug (Due 9/9)',
          isChecked: false,
          isOptionOpen: false,
        },
        {
          id: 2,
          description: 'Fix a bug (Due 8/9)',
          isChecked: false,
          isOptionOpen: false,
        },
      ],
    },
  ];

  // const { checklistData } = useContext(ChecklistContext);

  const { data: checklistData } = useGetChecklists();
  const { data: checkitemData } = useGetCheckitems();

  if (checklistData && checkitemData) {
    const combinedChecklistData = combinedChecklist(
      checklistData,
      checkitemData
    );
    console.log('runs');
    console.log(combinedChecklistData);
  }

  // checklistData.map((checklist) => {
  //   const filteredCheckitem =
  //   return
  // })
  // checklistData.map((checklist: any) => {
  //   return checklist._id
  // })

  return (
    <ul className='flex flex-col gap-8'>
      {data.map((item, i) => {
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
