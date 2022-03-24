import { Link } from 'react-router-dom';

function Nav() {

    return (
    <div>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">LucyHye</div>
            </Link>
            <hr className="sidebar-divider my-0"></hr>
            <li className="nav-item active">
                <Link to="/dashboard" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i> 
                    <span>Dashboard</span>
                </Link>
            </li> 
            <hr className="sidebar-divider"></hr>
            <div className="sidebar-heading">
                Interface
            </div>
            <li className="nav-item">
                <Link to='/board' className="nav-link">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Board</span>
                </Link>
                {/* <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link to='/board' className="nav-link">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Board</span>
                        </Link> 
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div> */}
            </li>
            <li className="nav-item">
                <Link to="/admin" className="nav-link">
                    <i className="fas fa-fw fa-cog"></i> 
                    <span>Admin</span>
                </Link>
                   
                {/* <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div> */}
            </li>
            <hr className="sidebar-divider"></hr>
            <div className="sidebar-heading">
                Addons
            </div>
            <li className="nav-item">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>
            <hr className="sidebar-divider d-none d-md-block"></hr>
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
            <div className="sidebar-card d-none d-lg-flex">
                <p className="text-center mb-2"><strong>SB Admin Pro111</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
          </ul>
        </div>
  );
}

export default Nav;
