import React, {useContext, useState} from 'react'
import './home.css';
import { AuthContext } from '../contexts/auth.js'
import Button from '../components/styledButton';


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { login, loginMessage} = useContext(AuthContext);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };


  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="actions">
        {loginMessage}
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
export default Signin;