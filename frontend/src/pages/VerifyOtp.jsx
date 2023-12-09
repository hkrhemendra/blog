import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const VerifyOtp = () => {

    const otp = useRef();
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
     <main className="form-signin m-auto">
        <form>
          <center>
            <h1 className="h3 mb-3 fw-normal">Enter OTP</h1>
            <p>An otp has been sent to your email, please verify</p>
          </center>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder='Enter OTP'
              id="floatingInput"
              ref={otp}
            />
            <label htmlFor="floatingInput">Enter OTP</label>
          </div>

          <button
            className="btn btn-outline-primary w-100 py-2 my-2"
            type="submit"
          >
            Verify
          </button>
        </form>
        <div className="d-flex justify-content-between">
          <Link to="/login">Back</Link>
        </div>
      </main>
    </div>
  )
}

export default VerifyOtp
