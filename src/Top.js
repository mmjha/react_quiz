import React, { useState, useEffect } from 'react';

function Top() {
    
    return (
        <div className="Top">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                <div className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <i className="fas fa-search fa-fw"></i>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter">3+</span>
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                    Alerts Center
                </h6>
                    <div className="mr-3">
                        <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 12, 2019</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                    <div className="mr-3">
                        <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 7, 2019</div>
                        $290.29 has been deposited into your account!
                    </div>
                    <div className="mr-3">
                        <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending for your account.
                    </div>
            </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">7</span>
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">
                    Message Center
                </h6>
                    <div className="dropdown-list-image mr-3">
                        <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">Hi there! I am wondering if you can help me with a
                            problem I've been having.</div>
                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                    <div className="dropdown-list-image mr-3">
                        <div className="status-indicator"></div>
                    </div>
                    <div>
                        <div className="text-truncate">I have the photos that you ordered last month, how
                            would you like them sent to you?</div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                    <div className="dropdown-list-image mr-3">
                        <div className="status-indicator bg-warning"></div>
                    </div>
                    <div>
                        <div className="text-truncate">Last month's report looks great, I am very happy with
                            the progress so far, keep up the good work!</div>
                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                    <div className="dropdown-list-image mr-3">
                        <div className="status-indicator bg-success"></div>
                    </div>
                    <div>
                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if they aren't good...</div>
                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                    </div>
            </div>
        </li>
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                {/* <img className="img-profile rounded-circle"
                    src="{% static 'templates/img/undraw_profile.svg' %}"> */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                <div className="dropdown-divider"></div>
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
            </div>
        </li>
    </ul>
</nav>
</div>
  );
}

export default Top;
