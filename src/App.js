// import logo from './logo.svg';
import './App.css';
// import Top from './Top';
// import Nav from './Nav';
import Login from './components/Login';
// import Dashboard from './Dashboard';
// import Bottom from './Bottom';
import './templates/css/sb-admin-2.min.css';
import './templates/vendor/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
        <div id="wrapper">
          <Login />
          {/* <Nav /> 
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Top />
              <Dashboard /> 
              <Bottom /> 
            </div>
          </div> */}
        </div>
    </div>
  );
}

export default App;
