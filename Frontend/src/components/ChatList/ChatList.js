import Avatar from "@material-ui/core/Avatar";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import styles from "./ChatList.module.css";
import {
  doc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthListener } from "../../Screens/Home/CurrentUser";

const ChatList = ({ data, setChatClicked }) => {
  const user = useAuthListener();
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    const ref = query(collection(db, `users/${user}/joinedCommunity`));
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const announcementsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCommunity(announcementsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.list}>
      <div className={styles.header}></div>

      {community?.map((agency) => {
        return (
          <ListGroup
            as="ol"
            className="bg-purple"
            //  key={agency.name}
            onClick={() => setChatClicked(agency.name)}
          >
            <ListGroup.Item
              className="d-flex justify-content-between align-items-start mx-2 mt-2"
              as="li"
              color="#CBC3E3"
            >
              <div>
                <Avatar className="ml-5 mr-5" src={"../images/logo.png"} />
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold ">{agency.name}</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
          // <div
          //   className={styles.listItem}
          //   onClick={() => setChatClicked(agency.name)}
          // >
          //   <div>
          //     <Avatar className="ml-5 mr-5" src={"../images/logo.png"} />
          //   </div>

          //   <div>
          //     <p>{agency.name}</p>
          //   </div>
          // </div>
        );
      })}
    </div>
  );
};

export default ChatList;
