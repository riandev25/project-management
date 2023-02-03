import { Fragment } from 'react';
interface IChecklistMilestone {
  percentages: string;
}

const ChecklistMilestone = ({ percentages }: IChecklistMilestone) => {
  if (percentages !== '') return <p></p>;
  else {
    const width = `w-[${percentages}%]`;
    console.log(width);
    return (
      <Fragment>
        <div className={`${width} h-2 rounded-full bg-gray-300`} />
      </Fragment>
    );
  }
};

export default ChecklistMilestone;
