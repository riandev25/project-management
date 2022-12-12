import { useContext } from 'react';
import { ChecklistContext } from '../../context/ChecklistContext/ChecklistContext';

interface IChecklist {
  title: string;
  isChecked: boolean;
}

const useChecklist = () => {
  const { dispatchChecklist } = useContext(ChecklistContext);

  const onChangeHandler = ({ title, isChecked }: IChecklist) => {
    dispatchChecklist({
      type: 'TOGGLE_CHECKBOX',
      payload: {
        title,
        isChecked,
      },
    });
  };

  return { onChangeHandler };
};
export default useChecklist;
