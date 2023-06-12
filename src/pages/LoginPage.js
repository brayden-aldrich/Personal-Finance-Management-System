import React, { useState } from 'react';
import userData from '../../src/userdata'; // Path to your user data file
import './LoginPage.scss'
import UserManager from '../../src/userdata';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(!UserManager.anyAccountExists());
    // const [isSigningUpComplete, setIsSigningUpComplete] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(UserManager.isLoggedIn);
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Check if entered username/password match any user in userData
      // const user = userData.users.find(
      //   (u) => u.username === username && u.password === password
      // );
  
      if (UserManager.tryToLogIn(username, password)) {
        // Perform successful login actions
        console.log('Login successful!');
        setErrorMessage('');
        setIsLoggedIn(true);
      } else {
        // Display an error message for invalid credentials
        setErrorMessage('Invalid username or password');
      }
    };
  
    const handleSignUp = (e) => {
      e.preventDefault();
  
      // if (!isSigningUpComplete) {
      //   // Mark sign-up as complete without saving user data
      //   setIsSigningUpComplete(true);
      //   return;
      // }
  
      // Check if entered username already exists in userData
      const userExists = UserManager.anyAccountExists()//userData.users.some((u) => u.username === username);
  
      if (userExists) {
        // Display an error message for existing username
        setErrorMessage('Username already exists');
      } else {
        // Add the new user to userData
        // userData.users.push({ username, password });
        UserManager.setCredentials(username, password)
  
        // Perform successful sign-up actions
        console.log('Sign up successful!');
        setErrorMessage('');
        setIsSigningUp(false);
        // setIsSigningUpComplete(false);
        setIsLoggedIn(true);
      }
    };
  
    const handleToggleSignUp = () => {
      setIsSigningUp(!isSigningUp);
      // setIsSigningUpComplete(false);
      setUsername('');
      setPassword('');
      setErrorMessage('');
    };
  
    const handleInputChange = (e) => {
      // if (!isSigningUpComplete) {
      //   setIsSigningUpComplete(true);
      // }
      setUsername(e.target.value);
    };

    const logOut = () => {
      UserManager.logOut();
      setIsSigningUp(!UserManager.anyAccountExists())
      setIsLoggedIn(false)
    }
  
    if (isLoggedIn) {
      return (
        <div>
          <h2>You are logged in!</h2>
          <button onClick={logOut}>Sign Out</button>
        </div>
      );
    }
  
    return (
        <div style={{'marginTop': '3rem'}}>
        <h2 id="sign-in-header">{isSigningUp ? 'Sign Up' : 'Login'}</h2>
        <form id="loginPanel">
            <input
                className="loginPanelItem loginInput"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                 />
            <input
                className="loginPanelItem loginInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                 />
            {!isSigningUp ? (
                <button className="login-submit panel-button loginPanelItem" type="submit" onClick={handleLogin}>Login</button>
            ) : isSigningUp ? (
                <button className="login-submit panel-button loginPanelItem" type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            ) : (
                <button className="login-submit panel-button loginPanelItem" type="submit">Complete Sign Up</button>
            )}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {/* Disable re-registering to access sensitive information */}
            {/* {isSigningUp && (
                <p className="panelBottom">
                    Already have an account?{' '}
                    <button className="panel-button link-button" onClick={handleToggleSignUp}>
                        Login
                    </button>
                </p>
            )}
            {!isSigningUp && (
                <p className="panelBottom">
                    Don't have an account?{' '}
                    <button className="panel-button link-button" onClick={handleToggleSignUp}>
                        Sign Up
                    </button>
                </p>
            )} */}
        </form>
        </div>
    );
  };
  
  export default LoginForm;
  