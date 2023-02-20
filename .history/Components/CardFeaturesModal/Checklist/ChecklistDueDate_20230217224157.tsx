import { useState } from 'react';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface IChecklistDueDate {
  id?: string;
  exitBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ChecklistDueDate = ({ id, exitBtnHandler }: IChecklistDueDate) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  // Submit data
  const submitHandler = () => {};

  return (
    <div className='absolute z-20 right-10 flex flex-col w-full px-2 py-1.5 bg-gray-300 rounded-md shadow-md'>
      <HeaderModal
        title='Due date'
        id={id}
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <div className='w-full text-sm'>
        <DatePicker
          className='p-1 w-auto flex'
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          timeInputLabel='Time:'
          dateFormat='MM/dd/yyyy h:mm aa'
          showTimeInput
        />
        <form id='external-form' onSubmit={submitHandler}>
          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default ChecklistDueDate;
