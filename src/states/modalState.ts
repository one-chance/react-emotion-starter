import { atom } from 'recoil';

type ModalId = { [key: string]: boolean };

export const modalState = atom<ModalId>({
  key: 'modalState',
  default: {},
});
