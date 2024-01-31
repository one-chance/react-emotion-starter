import { useRecoilState } from 'recoil';

import { modalState } from '@states/index';

export const useModal = () => {
  const [modals, setModals] = useRecoilState(modalState);

  const openModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: true });
  };

  const closeModal = (modalId: string) => {
    setModals({ ...modals, [modalId]: false });
  };

  const showModal = (modalId: string) => {
    return modals[modalId] || false;
  };

  return { openModal, closeModal, showModal };
};
