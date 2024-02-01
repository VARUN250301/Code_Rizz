import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Category from "../../components/Category/Category";
import Popup from "reactjs-popup";
import Trends from "../../components/Category/Trends";
import slides from "../../mock.json";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthListener } from "../../Screens/Home/CurrentUser";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Modal } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import { addDoc, updateDoc, setDoc } from "firebase/firestore";

const PopupForm = ({ onClose }) => {
  // Define your form state and logic here
  const [communityName, setCommunityName] = useState("");
  const [communityemail, setCommunityEmail] = useState("");
  const [formData, setFormData] = useState({
    // communityName: "",
    // communityAdd: "",
    // communityDet: "",
    // Your form fields and their initial values
  });

  const user = useAuthListener();


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
      collection(db, "users",user),
      orderBy("timestamp", "desc")
    );

    const docSnap = getDocs(ref);

    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const announcementsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCommunityName(announcementsData.display);
      setCommunityEmail(announcementsData.setCommunityEmail)
    });

    return () => unsubscribe();
  }, []);


};

function Donation() {
  const user = useAuthListener();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initiatives, setInitiatives] = useState([]);
  const [community, setCommunity] = useState([]);
  const [isPopupOpenArray, setIsPopupOpenArray] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  var toggleModal = () => {
    setModalShow(!modalShow);
  };

  const openPopup = (index) => {
    setIsPopupOpenArray((prev) => {
      const newArray = [...prev];
      newArray[index] = true;
      return newArray;
    });
  };

  const closePopup = (index) => {
    setIsPopupOpenArray((prev) => {
      const newArray = [...prev];
      newArray[index] = false;
      return newArray;
    });
  };

  // useEffect(() => {
  //   const ref = query(collection(db, `users/${user}`));
  //   const unsubscribe = onSnapshot(ref, (querySnapshot) => {
  //     const announcementsData = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setCommunity(announcementsData);
  //   });

  //   // return () => unsubscribe();
  // }, [user]);

  // const docRef = doc(db, "users", user);
  // const docSnap = await getDoc(docRef);
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  const [index, setIndex] = useState(0);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/csr/initiatives");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setInitiatives(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="Bannerss">
          <div className="bannerTitle">
            YOUR CAMPAIGNS
            <div className="view">Create your own initiatives</div>
          </div>
          <div
            className="banners row"
            style={{ marginLeft: "250px", width: "86vw" }}
          >
            {initiatives.map((bd, index) => (
              <div
                onClick={() => {
                  setModal(true);
                  setIndex(index);
                }}
                className="col-md-4 mb-4"
              >
                <div>
                  <div
                    className="banner"
                    onClick={() => {
                      setModalShow(true);
                    }}
                  >
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECLqvE1Y2jzj36brUEv_gEk5SwF1IepoMOxcZ4n_9oB5U6xNuXZGwE3BIfJi-n6wVFL4&usqp=CAU"
                      }
                    />
                    <div className="bannerDesc">
                      <div>{bd.type}</div>
                      <div className="titlee">{bd.name}</div>
                      <div
                        style={{
                          textAlign: "start",
                          color: "white",
                        }}
                      >
                        <div>Metrics</div>
                        <div style={{ fontWeight: "normal" }}>{bd.metrics}</div>
                        <div>PotentialImpactMetric</div>
                        <div style={{ fontWeight: "normal" }}>
                          {bd.potenitalImpactMetric}
                        </div>
                      </div>
                      <div className="spacee2">
                        <div>Days left</div>
                        <div>
                          {"   "} {bd.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Popup open={isPopupOpen} onClose={closePopup}>
                  <PopupForm onClose={closePopup} />
                </Popup>
              </div>
            ))}
            <div></div>
          </div>{" "}
          <br />
        </div>
        {modal && (
          <Modal show={modalShow} onHide={toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>initiatives</Modal.Title>
            </Modal.Header>
            <Modal.Body>{/* Add your modal content here */}</Modal.Body>
            <Modal.Footer>
              <input type="text" placeholder="Enter your Fund Allocations" />
              <input
                type="text"
                placeholder="Enter Number of Employees participating"
              />
              <Button
                variant="primary"
                onClick={() => {
                  initiatives[index].status = "Completed";
                  setModal(false);
                  console.log(initiatives[index])
                  const initiativeEmail = initiatives[index].email;
                  const initiativeType = initiatives[index].type;

                  // const name =

                  fetch("http://localhost:4000/applications/submit", {
                    
                    
                    method: "POST", 
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      companyName : "vaibhav Education" ,
                      companyEmail :"gawadvaibhav31@gmail.com",
                      initiativeEmail: initiativeEmail,
                      initiativeType : initiativeType


                    }),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      alert("Success:", data);
                    })
                    .catch((error) => {
                      alert("Error:", error);
                    });
                }}
              >
                Join The Social Cause
              </Button>

              <Button variant="secondary" onClick={() => setModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>

    // <div>
    //   <p>Hey its donation page</p>

    //   <Card border="dark" style={{ width: "18rem" }} bg="primary">
    //     <Card.Img variant="top" src="/images/logo.png" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //     </Card.Body>
    //   </Card>
    // </div>
  );
}

export default Donation;
