import React, { useState } from "react";
import { skills } from "../../skills.js";
import "./CompanyRegistrationForm.css"; // Import the CSS file
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthListener } from "../../Screens/Home/CurrentUser.js";

const CompanyRegistrationForm = () => {
  const user = useAuthListener();
  // State to manage form data
  const [formData, setFormData] = useState({
    companyName: "",
    values: "",
    vision: "",
    mission: "",
    areasOfInterest: [],
  });

  const skill = skills;

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

    console.log(formData.areasOfInterest);
  };

  const handleJoinCommunity = async () => {
    const companyData = {
      name: formData.companyName,
      values: formData.values,
      vision: formData.vision,
      mission: formData.mission,
      areaofInterest: formData.areasOfInterest,
    };

    await setDoc(doc(db, `users/${user}`), {
      companyData,
    });

    const csrfToken = "your_csrf_token_here";
    console.log("Form submitted with data:", formData);
    console.log("CSRF Token:", csrfToken);
    // const userRef = await addDoc(
    //   communityName,
    //   collection(db, "users/usersData/joinedCommunity"),
    //   communityData
    // );
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
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <p className="text-gray-900"> Sectors:</p>

          {skill.map((skill) => (
            <div className="col-md-4 mb-4">
              <div>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={skill}
                  aria-label={skill}
                  name="skill"
                  onChange={handleInterestChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  {skill}
                </label>
                &nbsp;&nbsp;
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={(e) => {
            handleJoinCommunity();
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CompanyRegistrationForm;
