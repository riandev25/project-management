import { FormEvent, useContext, useEffect, useState } from 'react';
// import { ChecklistContext } from '../../../lib/context/ChecklistContext/ChecklistContext';
// import { FeatureContext } from '../../../lib/context/FeatureContext/featureProvider';
import { SubmitBtn } from '../../UI/Buttons/Buttons';
import HeaderModal from '../../UI/Feature/HeaderModal';
import { useBoardStore } from '../../store/userStore';
import { shallow } from 'zustand/shallow';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { authSchema } from '../../lib/utils/authSchema';
import { useMutation } from '@tanstack/react-query';
import UserService from '../../services/UserService';
import { createBoardchema } from '../../lib/utils/createBoardSchema';
import { FieldValues } from 'react-hook-form/dist/types';
import { capitalizeFirstLetter } from '../../lib/utils/captitalizeString';

const CreateBoardModal = () => {
  // Context
  // const { dispatchFeature } = useContext(FeatureContext);
  // const { checklistData, dispatchChecklist } = useContext(ChecklistContext);

  const [title, setTitle] = useState<string>('');

  const { toggleModal, isModalOpen } = useBoardStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createBoardchema),
  });

  const { data, mutateAsync } = useMutation({
    mutationKey: ['boards-list'],
    mutationFn: UserService().createBoard,
  });

  const onSubmitHandler = async (data: FieldValues, event: any) => {
    event.preventDefault();
    const response = await mutateAsync({
      boardName: capitalizeFirstLetter(data.boardName),
    });
    console.log(response);
    toggleModal();
  };

  return (
    <form
      className='absolute top-2 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <HeaderModal
        title='Create board'
        idFeature='create-board'
        leftBtn={false}
        exitBtnHandler={toggleModal}
      />
      <section className='flex flex-col gap-3'>
        <div>
          <label className='text-xs font-normal text-gray-600'>Title</label>
          <input
            {...register('boardName')}
            type='text'
            data-id='add-title'
            name='add-board-name'
            className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
            placeholder='Title'
          />
        </div>
      </section>
      <SubmitBtn id='' name='Add' bgColor='bg-blue-600 hover:bg-blue-700' />
    </form>
  );
};
export default CreateBoardModal;
