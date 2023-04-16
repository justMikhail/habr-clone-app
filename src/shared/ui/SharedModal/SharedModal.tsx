import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import classNames from 'classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { SharedPortal } from 'shared/ui/SharedPortal/SharedPortal';
import styles from './SharedModal.module.scss';

interface SharedModalProps {
  className?: string;
  children?: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const SharedModal = (props: SharedModalProps) => {
  const {
    className,
    children,
    isOpened,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpened) {
      setIsMounted(true);
    }
  }, [isOpened]);

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpened, onKeyDown]);

  const modClassNames = classNames({
    [styles.opened]: isOpened,
    [styles.isClosing]: isClosing,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <SharedPortal>
      <div className={classNames(styles.SharedModal, modClassNames)}>
        <div
          className={classNames(styles.overlay)}
          onClick={handleClose}
        >
          <div
            className={classNames(styles.content)}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </SharedPortal>
  );
};
