
import React, { useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    console.log(username)
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    console.log(password)
    setPassword(e.target.value)
  }

  const onClickLogin = () => {
    console.log('click login button')
    axios.post('http://work87.wiro.kr/api/rest-auth')
  }

  useEffect(() => {
    axios.get('/')
    .then(res => console.log(res))
    .catch()
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
                                    </form> */}
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

export default App;
