import { Fragment } from 'react';
interface IChecklistMilestone {
  percentages: string;
}

const ChecklistMilestone = ({ percentages }: IChecklistMilestone) => {
  return (
    <Fragment>
      <div className={`w-[${percentages}%] h-2 rounded-full bg-gray-300`} />
    </Fragment>
  );
};

export default ChecklistMilestone;
