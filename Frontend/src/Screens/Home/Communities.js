import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
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
import { useAuthListener } from "./CurrentUser";
import  './communities.css'
function Communities({ data, setJoinedCommunities }) {
  const user = useAuthListener();
  // const [user, setUser] = useState(null);
  // const auth = getAuth();

  // onAuthStateChanged(auth, (users) => {
  //   if (users) {
  //     const currUser = users.uid;
  //     console.log(users.displayName);
  //     setUser(users.displayName);
  //   } else {
  //     console.log("No user");
  //   }
  // });
  const handleJoinCommunity = async (
    communityId,
    communityName,
    communityLocation
  ) => {
    const communityData = {
      uid: communityId,
      name: communityName,
      location: communityLocation,
    };

    await setDoc(doc(db, `users/${user}/joinedCommunity`, communityName), {
      communityData,
    });
    // const userRef = await addDoc(
    //   communityName,
    //   collection(db, "users/usersData/joinedCommunity"),
    //   communityData
    // );
  };

  const images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1INIPZHKfiZ8I5PWPjzC0oXaV6oyOJ0GcQ&usqp=CAU" ,
                "https://i0.wp.com/give.do/blog/wp-content/uploads/2023/08/Importance-of-donations-for-NGOs-in-India-Give-blog-pexels-ritesh-arya-3079978.jpg?fit=1920%2C1280&ssl=1",
                "https://www.plan.org.hk/wp-content/uploads/2023/06/Picture-4-1024x504.jpg",
                "https://hopebridgefoundation.org/wp-content/uploads/2023/03/903320960.jpg",
                "https://i.pinimg.com/736x/a3/ff/bd/a3ffbd55dbba6a9b9b962806605f3c44.jpg"
  ]
  return (
    <div>
    <div style={{ display: "flex", flexWrap: "wrap",width:'100vw' }} className="communtiyy">
      {data.map((agency,index) => (
        <Card key={agency.name} className="communityCard">
          <Card.Img
            variant="top"
            src={images[index%5]
            }
          />
          <Card.Body>
            <Card.Title>{agency.name}</Card.Title>
            <Card.Text>{agency.location}</Card.Text>
            <Button
              onClick={(e) => {
                handleJoinCommunity(agency.id, agency.name, agency.location);
              }}
              variant="primary"
              className="joinC"
            >
              Join Community
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Link to="/chat" className="gotocom">Go to Community List <i class="fa-solid fa-arrow-right"></i></Link>

    </div>
    <div><img className="chatbot" src="https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/38/8c/db/388cdbbd-1749-50cd-7438-bee830f4e254/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg"/></div>
</div>
  );
}

export default Communities;
