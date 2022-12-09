import Checklist from './Checklist';

export interface IChecklistArray {
  title: string;
  percentage: number;
  data: IChecklist[];
}

export interface IChecklist {
  description: string;
  isChecked: boolean;
}

const ChecklistArray = () => {
  const DATA = [
    {
      title: 'Checklist',
      percentage: 0,
      checklistData: [
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

  return (
    <div>
      <ul>
        {DATA.map((item, i) => {
          return (
            <li key={i}>
              <Checklist data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChecklistArray;
