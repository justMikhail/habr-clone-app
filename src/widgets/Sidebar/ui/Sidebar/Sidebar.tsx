import classNames from 'classnames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import {
  SharedButton,
  SharedButtonShape,
  SharedButtonSize,
  SharedButtonTheme,
} from 'shared/ui/SharedButton/SharedButton';
import { SharedLink, SharedLinkTheme } from 'shared/ui/SharedLink/SharedLink';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import HomeIcon from 'shared/assets/icons/main-20-20.svg';
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
        className={styles.toggler}
        theme={SharedButtonTheme.BG_INVERTED}
        shape={SharedButtonShape.SQUARE}
        size={SharedButtonSize.L}
        onClick={handleToggle}
      >
        {collapsed ? '>' : '<'}
      </SharedButton>

      <div className={styles.list}>
        <SharedLink
          to={RoutesPath.home}
          theme={SharedLinkTheme.PRIMARY}
          className={styles.item}
        >
          <HomeIcon className={styles.icon} />
          <span className={styles.text}>
            {t('Домашняя страница')}
          </span>
        </SharedLink>

        <SharedLink
          to={RoutesPath.about}
          theme={SharedLinkTheme.PRIMARY}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.text}>
            {t('О сайте страница')}
          </span>
        </SharedLink>
      </div>

      <div className={styles.tools}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
