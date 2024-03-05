import { ComponentProps, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Flex } from '@components/shared';

type SlideModalProps = ComponentProps<typeof Flex> & {
  modalId: string;
  onClose: (modalId: string) => void;
  position: 'top' | 'left' | 'right' | 'bottom';
  distance: number;
  children: ReactNode;
};

export default function SlideModal({
  modalId,
  children,
  onClose,
  position,
  distance,
  ...props
}: SlideModalProps) {
  const [isMoved, setIsMoved] = useState(false);

  const handleOverlayClick = () => {
    setIsMoved(false);
    setTimeout(() => onClose(modalId), 500);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOverlayClick();
      }
    };

    setIsMoved(true);

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
      background="dim"
      direction="column"
      id={`${modalId}-overlay`}
      role="presentation"
      zIndex={1000}
      fixed
      noScrollbar
      onClick={handleOverlayClick}
    >
      <Flex
        css={{
          position: 'fixed',
          ...(position === 'top' && {
            left: 0,
            right: 0,
            top: isMoved ? 0 : `-${distance}px`,
            transition: 'top 0.3s ease',
          }),
          ...(position === 'left' && {
            top: 0,
            bottom: 0,
            left: isMoved ? 0 : `-${distance}px`,
            transition: 'left 0.3s ease',
          }),
          ...(position === 'right' && {
            top: 0,
            bottom: 0,
            right: isMoved ? 0 : `-${distance}px`,
            transition: 'right 0.3s ease',
          }),
          ...(position === 'bottom' && {
            left: 0,
            right: 0,
            bottom: isMoved ? 0 : `-${distance}px`,
            transition: 'bottom 0.3s ease',
          }),
        }}
        direction="column"
        id={`${modalId}-content`}
        onClick={handleContentClick}
        {...props}
      >
        {children}
      </Flex>
    </Flex>,
    document.getElementById(`root-modal`)!,
  );
}
