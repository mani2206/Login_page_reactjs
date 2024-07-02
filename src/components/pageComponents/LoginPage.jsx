import React from "react";
import Input from "../baseComponents/Input";
import Button from "../baseComponents/Button";
import { useState } from "react";

export default function LoginPage({ title, subtitle, width }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    } else {
      console.log(`Email: ${email}, Password: ${password}`);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <main className="loginpage" style={{ width: "50vw", position:"relative"}}>
      {/* {width > 1023 && <div className="loginlogo1"></div>} */}
      <img className="logo1" src="../.././images/Group31.jpg"alt="logo" style={{width:"8vw",  position:"absolute", left:"20px", top:"13%"}}/>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="form-group"
          style={{
            width: "25vw",
          }}
        >
          
          <h5>{title}</h5>
          <p className="subtitle">{subtitle}</p>
          {error && <p className="error text-danger text-center">{error}</p>}
          <Input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mail@abc.com"
            label="Email"
          />
          <Input
            className="py-3"
            required
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="****"
            label="Password"
          />
          <div className="form-group form-check d-flex justify-content-between check-group">
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <div>
              <p className="m-0 password">Forgot Password?</p>
            </div>
          </div>
          <Button type="submit" className="w-100 mt-2 button">
            Login
          </Button>
          <p className="font-size pt-2 cursor-pointer">
            <span className="account">Create an account</span> Not Registered
            Yet?
          </p>
        </form>

      </div>
      {/* {width > 1023 && <div className="loginlogo2"></div>} */}
      <img className="logo1" src="../.././images/Group31.jpg"alt="logo" style={{width:"9vw",  position:"absolute", right:"20px", bottom:"20px"}}/>
    </main>
  );
}
