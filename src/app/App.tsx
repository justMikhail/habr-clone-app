import {Suspense} from "react";
import {Route, Routes, Link} from "react-router-dom";
import './styles/styles.scss';
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Home Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
