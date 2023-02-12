import classNames from "classnames";
import styles from './Sidebar.module.scss'
import {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, className)}>
            <button onClick={handleToggle}>
                toggle
            </button>
            <div className={styles.tools}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
