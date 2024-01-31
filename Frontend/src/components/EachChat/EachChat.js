import styles from "./EachChat.module.css";
import Avatar from "@material-ui/core/Avatar";
import React, { useEffect, useState, useRef } from "react";

const EachChat = ({ chatClicked }) => {
  const [inputValue, setInputValue] = useState("");
  const [cards, setCards] = useState([]);
  const cardsContainerRef = useRef(null);
  const inputRef = useRef(null);

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
    // Scroll to the bottom of the container when cards are updated
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollTop =
        cardsContainerRef.current.scrollHeight;
    }

    // Check if the last card is not visible due to the input field
    const lastCard = cardsContainerRef?.current?.lastChild;
    if (lastCard) {
      const lastCardBottom = lastCard.getBoundingClientRect().bottom;
      const inputTop = inputRef.current.getBoundingClientRect().top;

      if (lastCardBottom > inputTop) {
        cardsContainerRef.current.scrollTop += lastCardBottom - inputTop;
      }
    }
  }, [cards]);
  return (
    <>
      <div className={styles.eachChat}>
        {chatClicked === "" ? (
          <div className={styles.initial}>
            <p>Select a chat to get started...</p>
          </div>
        ) : (
          <div className={styles.chat}>
            <div className={styles.header}>
              <div className="d-flex mt-3">
                <div>
                  <Avatar className="ml-5 mr-5" src={"../images/logo.png"} />
                </div>
                {chatClicked}
              </div>
            </div>
            <div ref={cardsContainerRef} className={styles.message}>
              {/* Render cards from the array */}
              <div className={styles.pos}>
              {cards.map((text, index) => (
                <div key={index} className={styles.card}>
                  {text}
                </div>
              ))}
                </div>
            </div>

            <div style={{ display: "flex" }}>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
                className={styles.text}
                ref={inputRef}
              />
              <button className={styles.send} onClick={handleSendClick}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EachChat;
