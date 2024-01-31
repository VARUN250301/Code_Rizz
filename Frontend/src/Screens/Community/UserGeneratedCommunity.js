import React, { useState, useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"; // Import the default styles
import "./UserGeneratedCommunity.css";
import { Button } from "react-bootstrap";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthListener } from "../Home/CurrentUser";
const PopupForm = ({ onClose }) => {
  // Define your form state and logic here
  const [communityName, setCommunityName] = useState("");
  const [communityAdd, setCommunityAdd] = useState("");
  const [communityDet, setCommunityDet] = useState("");
  const [formData, setFormData] = useState({
    // communityName: "",
    // communityAdd: "",
    // communityDet: "",
    // Your form fields and their initial values
  });
  const user = useAuthListener();

  const handleJoinCommunity = async (e) => {
    e.preventDefault();
    try {
      const communityData = {
        name1: communityName,
        location1: communityAdd,
        details1: communityDet,
      };

      if (
        communityName.trim() !== "" &&
        communityAdd.trim() !== "" &&
        communityDet.trim() !== ""
      ) {
        const channelRef = await addDoc(
          collection(db, "Community"),
          communityData
        );
      }

      await setDoc(
        doc(db, `users/${user}/UserCreatedCommunity`, communityName),
        {
          communityData,
        }
      ).then(() => {
        onClose();
      });

      // await setDoc(doc(db, `users/${user}/UserCreatedCommunity`, communityName), {
      //   communityData,
      // });

      // await setDoc(doc(db, `community`, communityName), {
      //   communityData,
      // });
      // const userRef = await addDoc(
      //   communityName,
      //   collection(db, "users/usersData/joinedCommunity"),
      //   communityData
      // );

      //  onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <div
        style={{
          display: "inline-block",
          textAlign: "center",
          marginLeft: "15%",
        }}
      >
        {/* Your form fields go here */}
        <label>
          Community Name:
          <input
            type="text"
            onChange={(event) => {
              setCommunityName(event.target.value);
            }}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="field2"
            onChange={(event) => {
              setCommunityAdd(event.target.value);
            }}
          />
        </label>
        <label>
          Community Details:
          <input
            type="text"
            name="field1"
            onChange={(event) => {
              setCommunityDet(event.target.value);
            }}
            placeholder="Website Link,Document etc...."
          />
        </label>
        <br></br>

        {/* Add more form fields as needed */}

        {/* Submit button */}
        <Button variant="primary" onClick={handleJoinCommunity}>
          Submit
        </Button>
        {/* <button type="submit">Submit</button> */}
      </div>
    </div>
  );
};

const UserGeneratedCommunity = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      {/* Button to trigger the form popup */}
      <button onClick={openPopup}>Open Form</button>

      {/* Popup component */}
      <Popup open={isPopupOpen} onClose={closePopup}>
        <PopupForm onClose={closePopup} />
      </Popup>
    </div>
  );
};
export default UserGeneratedCommunity;
