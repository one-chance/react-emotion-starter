import { ComponentProps, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Flex } from '@components/shared';

type ModalProps = ComponentProps<typeof Flex> & {
  modalId: string;
  onClose: (modalId: string) => void;
  children: ReactNode;
};

export default function Modal({
  modalId,
  onClose,
  children,
  ...props
}: ModalProps) {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleOverlayClick = () => {
      onClose(modalId);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOverlayClick();
      }
    };

    document.body.style.overflow = 'hidden';
    document.body.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.body.removeEventListener('keydown', handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Flex
      alignItems="center"
      background="dim"
      direction="column"
      id={`${modalId}-overlay`}
      justifyContent="center"
      role="presentation"
      zIndex={1000}
      fixed
      noScrollbar
      onClick={() => onClose(modalId)}
    >
      <Flex
        css={{ overflowY: 'auto' }}
        direction="column"
        id={`${modalId}-content`}
        padding="20px"
        onClick={handleContentClick}
        {...props}
      >
        {children}
      </Flex>
    </Flex>,
    document.getElementById(`root-modal`)!,
  );
}
