// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Pages from './components/Pages';
import './templates/css/sb-admin-2.min.css';
import './templates/vendor/fontawesome-free/css/all.min.css';
import './templates/vendor/datatables/dataTables.bootstrap4.min.css';

function App() {

  const checkLogin = () => {
    if(localStorage.getItem('username') && localStorage.getItem('access_token')) {
      return true;
    }
    return false;
  }
  return (
    <div className="App">
      { checkLogin() === false ?
        <Login />
        :
        <Pages />
      }
    </div>
  );
}

export default App;
