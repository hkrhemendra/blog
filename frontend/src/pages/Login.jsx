import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <main className="form-signin m-auto">
        <form>
          <center>
            <h1 className="h3 mb-3 fw-normal">Sign {isLogin ? "In" : "Up"} </h1>
          </center>

          {!isLogin && (
            <div>
              <div className="form-floating my-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="First name"
                  required
                  ref={firstName}
                />
                <label for="floatingInput">First name</label>
              </div>
              <div className="form-floating my-2">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Last name"
                  required
                  ref={lastName}
                />
                <label for="floatingInput">Last name</label>
              </div>
            </div>
          )}

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={email}
            />
            <label for="floatingInput">Email address</label>
          </div>

          <button
            className="btn btn-outline-primary w-100 py-2 my-2"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="d-flex justify-content-between">
          <Link to="/">Back</Link>
          <button
            className="btn-link  text-primary"
            onClick={() => setIsLogin(!isLogin)}
          >
            Sign {isLogin ? "Up" : "In"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
