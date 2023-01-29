import { useQuery } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';
import userService from '../../../services/userService';
import { userStore } from '../../../store/userStore';

export const useGetBoard = () => {
  const { isModalOpen, toggleModal } = userStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  const { data, isSuccess } = useQuery({
    queryKey: ['boards-list'],
    queryFn: userService().getBoard,
  });

  return { isModalOpen, toggleModal, data, isSuccess };
};
