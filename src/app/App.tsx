import './styles/styles.scss';
import classNames from "classnames";
import { useTheme } from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App;
