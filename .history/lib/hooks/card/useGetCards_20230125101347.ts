import { useQuery } from '@tanstack/react-query';
import { cardStore } from '../../../store/cardStore';

export const useGetCards = () => {
  // const { isModalOpen, toggleModal } = cardStore(
  //   (state) => ({
  //     isModalOpen: state.isModalOpen,
  //     toggleModal: state.toggleModal,
  //   }),
  //   shallow
  // );

  const { data, isSuccess } = useQuery({
    queryKey: ['cards'],
    queryFn: userService().getBoard,
  });
};
