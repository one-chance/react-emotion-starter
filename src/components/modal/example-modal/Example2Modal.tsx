import { SlideModal } from '@components/modal';
import { Text } from '@components/shared';

type ModalProps = {
  onClose: (id: string) => void;
};

export default function ExampleModal({ onClose }: ModalProps) {
  return (
    <SlideModal
      alignItems="center"
      background="background"
      distance={300}
      justifyContent="center"
      modalId="example2-modal"
      position="right"
      radius={8}
      width={300}
      onClose={onClose}
    >
      <Text color="text-color">Example2 Modal</Text>
    </SlideModal>
  );
}
