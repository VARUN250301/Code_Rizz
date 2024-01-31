import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import InputControl from "../InputControl/InputControl";
import { auth } from "../firebase";
import { db } from "../firebase";
import styles from "./registration.css";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    blood: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  // Function to get user's location using Geolocation API
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = `(${latitude}, ${longitude})`;
          setValues((prev) => ({ ...prev, location: userLocation }));
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmission = async () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;

        await updateProfile(user, {
          displayName: values.name,
        });

        const userData = {
          uid: user.uid,
          name: values.name,
          email: values.email,
          location: values.location,
          phoneNumber: values.phone,
          bloodGroup: values.blood,
        };

        await setDoc(doc(db, "users", values.name), {
          userData,
        });
        // console.log("User added with ID: ", userRef.id);

        navigate("/");
      })

      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div style={{display:'flex'}} className="signuppp">
    <div className="signUpImage"></div>
    <div className='signUp'>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>SIGN<span style={{color:'black'}}> UP</span></h1>
        <h2 className={styles.heading}>Start your journey <br/> <span>today.</span></h2>
        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter your location"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
        <button onClick={getUserLocation} className="locationButton">Get My Location</button>{" "}
        {/* Add this button to trigger location retrieval */}
        <InputControl
          label="Blood Group"
          placeholder="Enter your blood group"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, blood: event.target.value }))
          }
        />
        <InputControl
          label="Phone Number"
          placeholder="Enter your phone number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled} className="signUpbutton">
            Signup
          </button>
          <p style={{marginLeft:'-25vw',marginTop:'10px'}} className="aldready">
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
