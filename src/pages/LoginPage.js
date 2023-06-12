import React, { useState } from 'react';
import userData from '../../src/userdata'; // Path to your user data file
import './LoginPage.scss'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [isSigningUpComplete, setIsSigningUpComplete] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Check if entered username/password match any user in userData
      const user = userData.users.find(
        (u) => u.username === username && u.password === password
      );
  
      if (user) {
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
  
      if (!isSigningUpComplete) {
        // Mark sign-up as complete without saving user data
        setIsSigningUpComplete(true);
        return;
      }
  
      // Check if entered username already exists in userData
      const userExists = userData.users.some((u) => u.username === username);
  
      if (userExists) {
        // Display an error message for existing username
        setErrorMessage('Username already exists');
      } else {
        // Add the new user to userData
        userData.users.push({ username, password });
  
        // Perform successful sign-up actions
        console.log('Sign up successful!');
        setErrorMessage('');
        setIsSigningUp(false);
        setIsSigningUpComplete(false);
        setIsLoggedIn(true);
      }
    };
  
    const handleToggleSignUp = () => {
      setIsSigningUp(!isSigningUp);
      setIsSigningUpComplete(false);
      setUsername('');
      setPassword('');
      setErrorMessage('');
    };
  
    const handleInputChange = (e) => {
      if (!isSigningUpComplete) {
        setIsSigningUpComplete(true);
      }
      setUsername(e.target.value);
    };
  
    if (isLoggedIn) {
      return (
        <div>
          <h2>You are logged in!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Sign Out</button>
        </div>
      );
    }
  
    return (
        <>
        <h2 id="sign-in-header">{isSigningUp ? 'Sign Up' : 'Login'}</h2>
        <form id="loginPanel" onSubmit={isSigningUp ? handleSignUp : handleLogin}>
            <input
                class="loginPanelItem loginInput"
                type="text"
                value={username}
                onChange={handleInputChange}
                placeholder="Username"
                disabled={isSigningUp && isSigningUpComplete} />
            <input
                class="loginPanelItem loginInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disabled={isSigningUp && isSigningUpComplete} />
            {!isSigningUp && !isSigningUpComplete ? (
                <button class="login-submit panel-button loginPanelItem" type="submit">Login</button>
            ) : isSigningUp && !isSigningUpComplete ? (
                <button class="login-submit panel-button loginPanelItem" type="button" onClick={handleToggleSignUp}>
                    Sign Up
                </button>
            ) : (
                <button class="login-submit panel-button loginPanelItem" type="submit">Complete Sign Up</button>
            )}
            {errorMessage && <div class="error-message">{errorMessage}</div>}
            {isSigningUp && (
                <p class="panelBottom">
                    Already have an account?{' '}
                    <button className="panel-button link-button" onClick={handleToggleSignUp}>
                        Login
                    </button>
                </p>
            )}
            {!isSigningUp && !isSigningUpComplete && (
                <p class="panelBottom">
                    Don't have an account?{' '}
                    <button className="panel-button link-button" onClick={handleToggleSignUp}>
                        Sign Up
                    </button>
                </p>
            )}
        </form>
        </>
    );
  };
  
  export default LoginForm;
  