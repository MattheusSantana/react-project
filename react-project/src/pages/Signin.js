import React, {useState} from 'react'
import './home.css';



const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("stop", {email, password});
  };


  return (
    <div id="login">
      <h1 className="title">Wellcome</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
            <label for="email">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="field">
            <label for="password">Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
export default Signin;