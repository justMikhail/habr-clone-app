import classNames from 'classnames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { SharedButton } from 'shared/ui/SharedButton/SharedButton';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
        {t('Переключить')}
      </SharedButton>
      <div className={styles.tools}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
