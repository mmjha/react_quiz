import { Link } from 'react-router-dom';

function Nav() {

    return (
    <div>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">LucyHye</div>
            </a>
            <hr class="sidebar-divider my-0"></hr>
            <li class="nav-item active">
                <Link to="/dashboard" className="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i> 
                    <span>Dashboard</span>
                </Link>
            </li> 
            <hr class="sidebar-divider"></hr>
            <div class="sidebar-heading">
                Interface
            </div>
            <li class="nav-item">
                <Link to='/board' className="nav-link">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Board</span>
                </Link>
                {/* <a class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <Link to='/board' className="nav-link">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Board</span>
                        </Link> 
                        <a class="collapse-item" href="buttons.html">Buttons</a>
                        <a class="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div> */}
            </li>
            <li class="nav-item">
                <Link to="/admin" className="nav-link">
                    <i class="fas fa-fw fa-cog"></i> 
                    <span>Admin</span>
                </Link>
                   
                {/* <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <a class="collapse-item" href="utilities-color.html">Colors</a>
                        <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div> */}
            </li>
            <hr class="sidebar-divider"></hr>
            <div class="sidebar-heading">
                Addons
            </div>
            <li class="nav-item">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>
            <hr class="sidebar-divider d-none d-md-block"></hr>
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
            <div class="sidebar-card d-none d-lg-flex">
                <p class="text-center mb-2"><strong>SB Admin Pro111</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
          </ul>
        </div>
  );
}

export default Nav;
