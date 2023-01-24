import { useQuery } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';
import userService from '../../../services/userService';
import { boardStore } from '../../../store/userStore';

export const useGetBoard = () => {
  const { isModalOpen, toggleModal } = boardStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      toggleModal: state.toggleModal,
    }),
    shallow
  );

  const { data } = useQuery({
    queryKey: ['boards-list'],
    queryFn: userService().getBoard,
  });

  return { isModalOpen, toggleModal, data };
};
