import classNames from 'classnames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
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
    <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, className)}>
      <button
        type="button"
        onClick={handleToggle}
      >
        toggle
      </button>
      <div className={styles.tools}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
