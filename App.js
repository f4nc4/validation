import React, { useState } from 'react';
import './App.css'; // Ensure this file exists and contains your styles

const FormWithValidation = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    phone: '',
    url: '',
    date: '',
    gender: '',
    terms: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    phone: '',
    url: '',
    date: '',
    gender: '',
    terms: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.username.trim()) {
      newErrors.username = 'Username is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formValues.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = 'Passwords does not match';
    }

    if (!Number(formValues.age) || Number(formValues.age) < 18) {
      newErrors.age = 'You must be at least 21 years old';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (formValues.phone && !phoneRegex.test(formValues.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (formValues.url && !urlRegex.test(formValues.url)) {
      newErrors.url = 'Invalid URL';
    }

    if (formValues.date && new Date(formValues.date) >= new Date()) {
      newErrors.date = 'Date must be in the past';
    }

    if (!formValues.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formValues.terms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // Handle successful form submission
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            className={`form-control ${errors.username ? 'error-border' : ''}`}
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'error-border' : ''}`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className={`form-control ${errors.password ? 'error-border' : ''}`}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            className={`form-control ${errors.confirmPassword ? 'error-border' : ''}`}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            className={`form-control ${errors.age ? 'error-border' : ''}`}
          />
          {errors.age && <p className="error-message">{errors.age}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone ? 'error-border' : ''}`}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="url">Website URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={formValues.url}
            onChange={handleChange}
            className={`form-control ${errors.url ? 'error-border' : ''}`}
          />
          {errors.url && <p className="error-message">{errors.url}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
            className={`form-control ${errors.date ? 'error-border' : ''}`}
          />
          {errors.date && <p className="error-message">{errors.date}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            className={`form-control ${errors.gender ? 'error-border' : ''}`}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formValues.terms}
              onChange={handleChange}
              className="form-check-input"
            />
            I agree to the terms and conditions
          </label>
          {errors.terms && <p className="error-message">{errors.terms}</p>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <FormWithValidation />
    </div>
  );
}

export default App;