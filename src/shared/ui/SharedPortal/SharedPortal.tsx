import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface SharedPortalProps {
  children?: ReactNode;
  element?: HTMLElement;
}

export const SharedPortal = (props: SharedPortalProps) => {
  const {
    children,
    element = document.body,
  } = props;

  return createPortal(children, element);
};
