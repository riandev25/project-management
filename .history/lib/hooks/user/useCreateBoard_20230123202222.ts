import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useForm, FieldValues } from 'react-hook-form';
import { shallow } from 'zustand/shallow';
import { capitalizeFirstLetter } from '../../utils/captitalizeString';
import { createBoardchema } from '../../utils/createBoardSchema';
import { boardStore } from '../../../store/userStore';
import userService from '../../../services/userService';

export const useCreateBoard = () => {
  const { toggleModal, isModalOpen } = boardStore(
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

  const queryClient = useQueryClient();

  const { data, mutateAsync } = useMutation({
    mutationFn: userService().createBoard,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['boards-list']);
    },
  });

  const onSubmitHandler = async (data: FieldValues, event: any) => {
    event.preventDefault();
    const response = await mutateAsync({
      boardName: capitalizeFirstLetter(data.boardName),
    });
    console.log(response);
    toggleModal();
  };

  const submitHandler = handleSubmit(onSubmitHandler);

  return { submitHandler, toggleModal, register };
};
