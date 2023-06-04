import React, {useContext, useState} from "react";
import "./SignUp.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const {createUser} = useContext(AuthContext);

  const handleSignUp = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });

    if (password !== confirm) {
      setError("Your Password Didn't Match");
      return;
    } else if (password.length < 6) {
      setError("Your Password Must Be 6 Characters At Least");
      return;
    }
  };

  return (
    <>
      <div className="login-container">
        <h2 className="title">Register</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p className="create-new">
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
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

export default SignUp;
