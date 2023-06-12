
import { Button } from '@mui/material';
import { Login, PersonAdd } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export function WelcomeCreateAccount() {
    return <div className='welcome-container'>
        <h1>Welcome to MyFinancePal!</h1>
        <p>Please create an account to get started</p>
        <Button variant="contained" component={Link} to="/login" endIcon={<PersonAdd />}>Create Account</Button>
    </div>
}

export function WelcomePleaseLogin() {
    return <div className='welcome-container'>
        <h1>Welcome back to MyFinancePal!</h1>
        <p>Please login using your credentials</p>
        <Button variant="contained" component={Link} to="/login" endIcon={<Login />}>Login</Button>
    </div>
}