import { useState } from 'react';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { SubmitBtn } from '../../../UI/Buttons/Buttons';
import { useUpdateCheckitem } from '../../../lib/hooks/checklist/useUpdateCheckitem';

interface IChecklistDueDate {
  id?: string;
  exitBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ChecklistDueDate = ({ id, exitBtnHandler }: IChecklistDueDate) => {
  const [dueDate, setDueDate] = useState<Date>(new Date());

  // Hook for inserting due
  const { mutateAsync, isLoading } = useUpdateCheckitem();

  // Submit data
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutateAsync({ checkitemId: String(id), dueDate: dueDate.getTime() });
  };

  return (
    <div className='absolute z-20 right-0 flex flex-col w-full justify-center gap-2 px-2 py-1.5 bg-gray-300 rounded-md shadow-md'>
      <HeaderModal
        title='Due date'
        id={id}
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <div className='w-full text-sm space-y-2'>
        <DatePicker
          className='p-1 w-auto flex'
          selected={dueDate}
          onChange={(date: Date) => setDueDate(date)}
          timeInputLabel='Time:'
          dateFormat='MM/dd/yyyy h:mm aa'
          showTimeInput
        />
        <form id='external-form' onSubmit={submitHandler}>
          <SubmitBtn
            id={String(id)}
            name='Insert'
            bgColor='bg-blue-500 hover:bg-blue-600 transition-colors ease-in-out'
            disabled={false}
          />
        </form>
      </div>
    </div>
  );
};

export default ChecklistDueDate;
