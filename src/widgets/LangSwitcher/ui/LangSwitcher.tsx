import {useTranslation} from "react-i18next";
import classNames from "classnames";
import styles from './LangSwitcher.module.scss'
import {SharedButton, ThemeButton} from "shared/ui/SharedButton/SharedButton";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <SharedButton
            className={classNames(styles.LangSwitcher, className)}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </SharedButton>
    );
};
