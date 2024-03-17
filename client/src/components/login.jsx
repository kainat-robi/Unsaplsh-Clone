import { Link } from 'react-router-dom';
import './style.css';

const Login = () => {
    // Function to handle login with Google
    const handleLoginWithGoogle = () => {
        // Redirect user to Google authentication endpoint
        window.location.href = 'https://unsplash/clone/auth.google.com'; // Replace with your Google authentication endpoint
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <p>Welcome Back</p>
            {/* Button to initiate login with Google */}
            <button className='btn' onClick={handleLoginWithGoogle}>Login with Google</button>
            <p>or</p>
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    )
}

export default Login;
