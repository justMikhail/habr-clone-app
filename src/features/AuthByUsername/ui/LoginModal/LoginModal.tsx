import classNames from 'classnames';
import { SharedModal } from 'shared/ui/SharedModal/SharedModal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <SharedModal
    className={classNames(cls.LoginModal, className)}
    isOpened={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </SharedModal>
);
