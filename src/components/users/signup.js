import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

  const handleSignup = async () => {
    try{
        await client.signup(credentials);
        navigate("/");
    }
    catch (error) {
        console.log("error")
        if (error.response && error.response.status === 401) {

            setShowError("Incorrect username or password. Please try again.");
        } else {
            setShowError("Sign-in failed. Please try again later.");
        }
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="signin-container">
      <div className="signin-box">
        <button className="close-button" onClick={handleCancel}>
          &#10006;
        </button>
        <h1>Signup</h1>
        <div className="row mb-2">
            <div className="col">
                <label>Username:</label>
            </div>
            <div className="col">
                <input
                type="text"
                className="form-control"
                value={credentials.username}
                onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                }/>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col">
                <label>Email id:</label>
            </div>
            <div className="col">
                <input
                type="text"
                className="form-control"
                value={credentials.email}
                onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                }/>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col">
                <label>First Name:</label>
            </div>
            <div className="col">
                <input
                type="text"
                className="form-control"
                value={credentials.firstName}
                onChange={(e) =>
                    setCredentials({ ...credentials, firstName: e.target.value })
                }/>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col">
                <label>Last Name:</label>
            </div>
            <div className="col">
                <input
                type="text"
                className="form-control"
                value={credentials.lastName}
                onChange={(e) =>
                    setCredentials({ ...credentials, lastName: e.target.value })
                }/>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col">
                <label>Date of birth:</label>
            </div>
            <div className="col">
                <input
                type="date"
                className="form-control"
                value={credentials.dob}
                onChange={(e) =>
                    setCredentials({ ...credentials, dob: e.target.value })
                }/>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col">
                <label>Password:</label>
            </div>
            <div className="col">
                <input
                type="password"
                className="form-control"
                value={credentials.password}
                onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                }/>
            </div>
        </div>
        <br/>
        <button onClick={handleSignup} className="btn btn-signin-color mt-3">
          Sign Up
        </button>
        <p>Already have an account? Sign in <Link to="/signin">here</Link></p>

      {showError && (
          <div className="error-modal">
            <div className="error-content">
              <p>Sign-up failed. Username already taken.</p>
              <button onClick={handleCloseError}>OK</button>
            </div>
          </div>
        )}
    </div>
    </div>
  );
}
export default Signup;