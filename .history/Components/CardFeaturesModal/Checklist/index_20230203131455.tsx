import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useGetCheckitems } from '../../../lib/hooks/checklist/useGetCheckitems';
import { useGetChecklists } from '../../../lib/hooks/checklist/useGetChecklists';
import { addCheckitemState } from '../../../lib/utils/addCheckitemState';
import { addChecklistState } from '../../../lib/utils/addChecklistState';
import { combinedChecklist } from '../../../lib/utils/combinedChecklist';
import { checkitemStore, checklistStore } from '../../../store/checklistStore';
import Checklist from './Checklist';

const ChecklistArray = () => {

  // Get checklist and checkitem data fetching

  const {
    data: checklistData,
    isLoading: isChecklistLoading,
  } = useGetChecklists();
  const {
    data: checkitemData,
    isLoading: isCheckitemLoading,
  } = useGetCheckitems();

  // Checklist and checkitem global state store

  const { updateChecklistState } = checklistStore(
    (state) => ({
      updateChecklistState: state.updateChecklistState,
    }),
    shallow
  );

  const { updateCheckitemState } = checkitemStore(
    (state) => ({
      checkitemState: state.checkitemState,
      updateCheckitemState: state.updateCheckitemState,
    }),
    shallow
  );

  useEffect(() => {
    if (checklistData && checkitemData) {
      const filteredChecklist = addChecklistState(checklistData);
      updateChecklistState(filteredChecklist);
      const filteredCheckitem = addCheckitemState(checkitemData);
      updateCheckitemState(filteredCheckitem);
    }
  }, [
    checkitemData,
    checklistData,
    updateCheckitemState,
    updateChecklistState,
  ]);

  if (isChecklistLoading && isCheckitemLoading) return <p></p>;

  if (checklistData && checkitemData) {
    const combinedChecklistData = combinedChecklist(
      checklistData,
      checkitemData
    );
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
  } else return <p></p>;
};
export default ChecklistArray;
