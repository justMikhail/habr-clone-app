import './styles/styles.scss';
import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <div className="page">
                <Sidebar/>
                <AppRouter />
            </div>
        </div>
    )
}

export default App;
