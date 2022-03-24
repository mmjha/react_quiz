import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Dashboard from './Dashboard';
import Board from './Board';
import Admin from './Admin';
import View from './View';
import Nav from '../Nav';
import Top from '../Top';
import Bottom from '../Bottom';

const HandleRoutes = () => {
    let routes = useRoutes([
        {'path': "/", element: <Dashboard />},
        {'path': "/dashboard", element: <Dashboard />},
        {'path': "/board", element: <Board />},
        {'path': "/admin", element: <Admin />},
        {'path': "/view/:id", element: <View />}
    ]);
    return routes;
}

function Pages() {
    return (
        <div id="wrapper"> 
            <Router>
                <Nav />
                <div id="content-wrapper" className="d-flex flex-column">
                <Top />
                <div id="content"></div>
                    <HandleRoutes />
                    <Bottom />
                </div>
            </Router>
        </div>
    );
}

export default Pages;
