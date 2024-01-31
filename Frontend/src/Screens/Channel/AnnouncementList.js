// src/components/AnnouncementList.js
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [cards, setCards] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      // Add the new card with the input text
      setCards([...cards, inputValue]);

      // Clear the input field
      setInputValue("");
    }
  };

  useEffect(() => {
    // const unsubscribe = db
    //   .collection("announcements")
    //   .orderBy("timestamp", "desc")
    //   .onSnapshot((snapshot) => {
    //     const announcementsData = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     setAnnouncements(announcementsData);
    //   });

    const ref = query(
      collection(db, "announcements"),
      orderBy("timestamp", "desc")
    );

    const docSnap = getDocs(ref);

    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const announcementsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnnouncements(announcementsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>{announcement.message}</li>
        ))}
      </ul>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleSendClick}>Send</button>

      <div>
        {/* Render cards from the array */}
        {cards.map((text, index) => (
          <div key={index} className="card">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementList;
