import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import "./Chat.css";

export const Chats = ({ room, chatClicked }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));

    console.log(queryMessages);
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const createdAt = data.createdAt ? data.createdAt.toDate() : null;
        messages.push({ ...data, id: doc.id, date: createdAt });
      });

      const sortedMessages = messages.slice().sort((a, b) => {
        return a.date - b.date; // Ascending order (earliest first)
      });
      setMessages(sortedMessages);
      console.log(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <>
      <div>
        {chatClicked === "" ? (
          <div>
            <p>Select a chat to get started...</p>
          </div>
        ) : (
          <div className="chat-app">
            <div className="header">
              <h1>Welcome to: {chatClicked}</h1>
            </div>
            <div className="messages">
              {messages.map((message) => (
                <div key={message.id} className="message">
                  <span className="user">{message.user}:</span> {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="new-message-form">
              <input
                type="text"
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
                className="new-message-input"
                placeholder="Type your message here..."
              />
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export default Chats;
