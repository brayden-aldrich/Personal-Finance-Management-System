import React from "react";
//import EncDec from "../components/EncDec";
import './LoginPage.scss';
import '../App.scss';

function LoginPage() {
    return(
        <>
            <h1 id="sign-in-header">
            Sign into MyFinancePal
            </h1>
            <div id="loginPanel">
                <form>
                    <label for="username" class="loginLabel">Username</label>
                    <input id="username" class="loginInput" placeholder="Enter Username" required></input>
                    <label for="password" class="loginLabel">Password</label>
                    <input id="password" class="loginInput" placeholder="Enter Password" required></input>
                    <input id="loginSubmit" class="loginInput" type="submit" value="Login"></input>
                </form>
            </div>
        </>
    );
}

export default LoginPage;