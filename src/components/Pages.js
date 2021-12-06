import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Dashboard from './Dashboard';
import Board from './Board';
import Admin from './Admin';
import Nav from '../Nav';
import Top from '../Top';
import Bottom from '../Bottom';

const HandleRoutes = () => {
    let routes = useRoutes([
        {'path': "/", element: <Dashboard />},
        {'path': "/dashboard", element: <Dashboard />},
        {'path': "/board", element: <Board />},
        {'path': "/admin", element: <Admin />}
    ]);
    return routes;
}

function Pages() {
    return (
        <div id="wrapper"> 
            <Router>
                <Nav />
                <div id="content-wrapper" class="d-flex flex-column">
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
