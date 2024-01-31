import { Modal } from '@components/modal';
import { Text } from '@components/shared';

type ModalProps = {
  onClose: (id: string) => void;
};

export default function ExampleModal({ onClose }: ModalProps) {
  return (
    <Modal
      alignItems="center"
      background="white"
      height={120}
      justifyContent="center"
      modalId="example-modal"
      radius={8}
      width={300}
      onClose={onClose}
    >
      <Text color="black">Example Modal</Text>
    </Modal>
  );
}
