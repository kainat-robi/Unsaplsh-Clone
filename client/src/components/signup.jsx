import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSignUpMutation } from '../redux/signup';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  });

  const [signUp, { isLoading, isError }] = useSignUpMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signUp(formData);

      if (response.data) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        console.error('Signup failed:', response.error);
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Join Unsplash</h1>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your First Name" />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your Last Name" />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        <button type="submit">Join</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred</p>}
    </div>
  );
}

export default Signup;
