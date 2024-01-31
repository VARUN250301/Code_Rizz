import React, { useState } from "react";
import "./CompanyRegistrationForm.css"; // Import the CSS file

const CompanyRegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    companyName: "",
    values: "",
    vision: "",
    mission: "",
    areasOfInterest: [],
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle areas of interest selection
  const handleInterestChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      areasOfInterest: formData.areasOfInterest.includes(value)
        ? formData.areasOfInterest.filter((area) => area !== value)
        : [...formData.areasOfInterest, value],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Include logic for form submission with CSRF token
    // For simplicity, the CSRF token is hardcoded here
    const csrfToken = "your_csrf_token_here";
    console.log("Form submitted with data:", formData);
    console.log("CSRF Token:", csrfToken);
  };

  return (
    <div className="company-registration-form">
      <h2>Company Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="values">Values</label>
          <input
            type="text"
            id="values"
            name="values"
            value={formData.values}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="vision">Vision</label>
          <input
            type="text"
            id="vision"
            name="vision"
            value={formData.vision}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mission">Mission</label>
          <input
            type="text"
            id="mission"
            name="mission"
            value={formData.mission}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Areas of Interest</label>
          <div>
            <input
              type="checkbox"
              id="technology"
              name="areasOfInterest"
              value="technology"
              checked={formData.areasOfInterest.includes("technology")}
              onChange={handleInterestChange}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="finance"
              name="areasOfInterest"
              value="finance"
              checked={formData.areasOfInterest.includes("finance")}
              onChange={handleInterestChange}
            />
            <label htmlFor="finance">Finance</label>
          </div>
          {/* Add more areas of interest as needed */}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CompanyRegistrationForm;
