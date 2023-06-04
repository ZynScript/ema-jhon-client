import React, {useContext, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import "./Login.css";
import {AuthContext} from "../../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, {replace: true});
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <div className="login-container">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control pass-field">
            <label htmlFor="">Password</label>
            <input type={show ? "text" : "password"} name="password" required />
            <p className="show-hide" onClick={() => setShow(!show)}>
              <span>
                {show ? (
                  <span>
                    <i class="fa-sharp fa-regular fa-eye"></i>
                  </span>
                ) : (
                  <span>
                    <i class="fa-sharp fa-regular fa-eye-slash"></i>
                  </span>
                )}
              </span>
            </p>
          </div>
          <div className="form-btn">
            <input className="btn-submit" type="submit" value="Login" />
          </div>
          <p className="create-new">
            New to Ema-john? <Link to="/signup">Create New Account</Link>
          </p>
          <br />
        </form>
        <button className="goole-login">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            width="33"
          />
          Continue with Google
        </button>
      </div>
      <p style={{textAlign: "center", color: "red"}}>{error}</p>
    </>
  );
};

export default Login;
