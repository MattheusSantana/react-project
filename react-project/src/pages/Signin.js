import React, {useContext, useState} from 'react'
import './home.css';
import { AuthContext } from '../contexts/auth.js';


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { authenticated, login , user} = useContext(AuthContext);
  
  const handleSubmit = (event) => {
    console.log('handle', user);
    event.preventDefault();
    login(email, password);
  };


  return (
    <div id="login">
      <h1 className="title">Wellcome</h1>
      <p>{String(authenticated)}</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="field">
            <label htmlFor="password">Password</label>
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