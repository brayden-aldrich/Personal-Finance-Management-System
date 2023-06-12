// Example userData.js
const userData = {
    users: [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
    ],
  };

class UserManager {

  static isLoggedIn = false;

  static initUserManager() {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') != null;
  }

  static anyAccountExists() {
    return localStorage.getItem('user') != null
  }

  static tryToLogIn(withUsername, withPass) {
    if (localStorage.getItem('user') == null) return false;
    let { username, password } = JSON.parse(localStorage.getItem('user'));
    this.isLoggedIn = username === withUsername && password === withPass;
    if (this.isLoggedIn) sessionStorage.setItem('isLoggedIn', "true");
    window.location.reload();
    return this.isLoggedIn;
  }

  static logOut() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.replace("/")
  }

  static setCredentials(username, password) {
    localStorage.setItem("user",JSON.stringify({ username: username, password: password }))
    this.isLoggedIn = true
    sessionStorage.setItem('isLoggedIn', "true");
    // Reload the page
    window.location.reload();
  }


}
  
export default UserManager;