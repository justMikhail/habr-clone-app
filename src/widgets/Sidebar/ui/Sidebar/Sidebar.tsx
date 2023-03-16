import classNames from 'classnames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { SharedButton } from '../../../../shared/ui/SharedButton/SharedButton';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, className)}
    >
      <SharedButton
        data-testid="sidebar-toggle"
        onClick={handleToggle}
      >
        toggle
      </SharedButton>
      <div className={styles.tools}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
