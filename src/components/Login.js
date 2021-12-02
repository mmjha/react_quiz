
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { getUser } from '../reducers/user';


function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [provider, setProvider] = useState('');
  // const dispatch = useDispatch();


  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onClickLogin = () => {
    let data = {
      'username' : username,
      'password' : password
    }
    axios.post('http://localhost:8001/api/token/', data)
    .then(res => {
      doLogin(res.data.token)
    })
  }

  const doLogin = (token) => {
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)
    document.location.href = '/'
    // dispatch(getUser(2, 10));
  }

  useEffect(() => {
    
  }, [])

  return (
    <body className="bg-gradient-primary">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <div className="user">
                                      <div className="form-group">
                                        <input type='text' className="form-control form-control-user" name='username' onChange={handleUsername} />
                                      </div>
                                      <div className="form-group">
                                        <input type='password' className="form-control form-control-user" name='password' onChange={handlePassword} />
                                      </div>
                                      <div className="form-group">
                                        <div className="custom-control custom-checkbox small">
                                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                                          <label className="custom-control-label" for="customCheck">Remember Me</label>
                                        </div>
                                      </div>
                                      <button type='button' className="btn btn-primary btn-user btn-block" onClick={onClickLogin}>Login</button>
                                      <hr></hr>
                                      {/* <Link to="/" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                      </Link>
                                      <Link to="/" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                      </Link> */}
                                    </div>
                                    {/* 
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                     */}
                                    <hr></hr>
                                    <div className="text-center">
                                    </div>
                                    <div className="text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
