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

  const { data: checklistData, isFetching: isChecklistFetching } =
    useGetChecklists();
  const { data: checkitemData, isFetching: isCheckitemFetching } =
    useGetCheckitems();

  if (isChecklistFetching && isCheckitemFetching) return <p></p>;

  const combinedChecklistData = combinedChecklist(checklistData, checkitemData);
  console.log(combinedChecklistData);

  return (
    <ul className='flex flex-col gap-8'>
      {combinedChecklistData.map((item, i) => {
        return (
          <li key={i}>
            <Checklist
              _id={item._id}
              name={item.name}
              checkitem={item.checkitem}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ChecklistArray;
