import { useState } from 'react';
import HeaderModal from '../../../UI/Feature/HeaderModal';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { SubmitBtn } from '../../../UI/Buttons/Buttons';
import { useUpdateCheckitem } from '../../../lib/hooks/checklist/useUpdateCheckitem';
import { getSpecificDateTime } from '../../../lib/utils/getSpecificDateTime';

interface IChecklistDueDate {
  id?: string;
  exitBtnHandler(event: React.MouseEvent<HTMLButtonElement>): void;
  pickedDueDate?: Date;
}

const ChecklistDueDate = ({
  id,
  exitBtnHandler,
  pickedDueDate,
}: IChecklistDueDate) => {
  const [dueDate, setDueDate] = useState<Date>(pickedDueDate || new Date());

  // Hook for inserting due
  const { mutateAsync, isLoading } = useUpdateCheckitem();

  // Submit data
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dates = getSpecificDateTime(dueDate);
    await mutateAsync({
      checkitemId: String(id),
      dueDate: dates,
      pickedDueDate: dueDate,
      hasDueDate: true,
    });
  };

  // Side effects

  return (
    <div className='absolute z-20 right-0 flex flex-col w-full justify-center gap-2 px-2 py-1.5 bg-gray-300 rounded-md shadow-md'>
      <HeaderModal
        title='Due date'
        id={id}
        leftBtn={false}
        exitBtnHandler={exitBtnHandler}
      />
      <form
        className='w-full text-sm space-y-2'
        id='external-form'
        onSubmit={submitHandler}
      >
        <DatePicker
          className='p-1 w-auto flex'
          selected={dueDate}
          onChange={(date: Date) => setDueDate(date)}
          timeInputLabel='Time:'
          dateFormat='MM/dd/yyyy h:mm aa'
          showTimeInput
        />
        <SubmitBtn
          id={String(id)}
          name='Insert'
          bgColor='bg-blue-500 hover:bg-blue-600 transition-colors ease-in-out'
          disabled={false}
        />
      </form>
    </div>
  );
};

export default ChecklistDueDate;
