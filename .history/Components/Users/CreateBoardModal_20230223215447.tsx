import { SubmitBtn } from '../../UI/Buttons/Buttons';
import HeaderModal from '../../UI/Feature/HeaderModal';
import { useCreateBoard } from '../../lib/hooks/user/useCreateBoard';
import { FieldValues, useForm } from 'react-hook-form';
import { shallow } from 'zustand/shallow';
import { capitalizeFirstLetter } from '../../lib/utils/captitalizeString';
import { userStore } from '../../store/userStore';
import { createBoardchema } from '../../lib/utils/createBoardSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../lib/utils/useOnClickOutside';

const CreateBoardModal = () => {
  // Create board hook
  const { mutateAsync, isSuccess } = useCreateBoard();

  // Local state
  const [boardName, setBoardName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createBoardchema),
  });

  // Event handlers
  const { toggleModal } = userStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  // Handle click events outside the component
  const ref = useRef<HTMLFormElement>(null);

  useOnClickOutside(ref, () => {
    toggleModal();
  });

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBoardName = capitalizeFirstLetter(boardName);
    await mutateAsync({ boardName: newBoardName });
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toggleModal();
      console.log('ok');
    }
  }, [isSuccess, toggleModal]);

  // const onSubmitHandler = async (data: FieldValues, event: any) => {
  //   event.preventDefault();
  //   const boardName = capitalizeFirstLetter(data.boardName);
  //   await mutateAsync({
  //     boardName,
  //   });
  //   reset();
  //   toggleModal();
  // };

  return (
    <form
      // ref={ref}
      className='z-30 fixed top-1/2 sm:top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-72 shadow-md rounded-sm bg-white px-3 py-2 gap-3'
      onSubmit={onSubmitHandler}
    >
      <HeaderModal
        title='Create board'
        idFeature='create-board'
        leftBtn={false}
        exitBtnHandler={toggleModal}
      />
      <section className='flex flex-col gap-3'>
        <div>
          <label className='text-xs text-gray-600'>Title</label>
          <input
            type='text'
            value={boardName}
            data-id='add-title'
            className='w-full border-2 border-solid border-gray-200 px-2 py-1 text-sm'
            placeholder='Title'
            onChange={(e) => setBoardName(e.target.value)}
          />
        </div>
      </section>
      <SubmitBtn id='' name='Create' bgColor='bg-blue-600 hover:bg-blue-700' />
    </form>
  );
};
export default CreateBoardModal;
