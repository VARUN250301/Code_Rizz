// src/components/AnnouncementForm.js
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const AnnouncementForm = () => {
  const [announcement, setAnnouncement] = useState("");


  const handlePublish = async () => {
    const channelData = {
      message: announcement,
      timestamp: new Date(),
    };
    if (announcement.trim() !== "") {
      const channelRef = await addDoc(collection(db, "announcements"), channelData);
     
      setAnnouncement("");
    }
  };

  return (
    <div>
      <textarea
        rows="3"
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
      ></textarea>
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};

export default AnnouncementForm;
