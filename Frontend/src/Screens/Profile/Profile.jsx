import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./profile.css";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthListener } from "../Home/CurrentUser";
import {
  doc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";

const bannersData = [
  {
    title: "Childrens education",
    desc: "",
    complete: "40%",
    expDate: "10",
    org: "Safe Kids Worldwide",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECLqvE1Y2jzj36brUEv_gEk5SwF1IepoMOxcZ4n_9oB5U6xNuXZGwE3BIfJi-n6wVFL4&usqp=CAU",
  },
  {
    title: "Vaccine Drive",
    desc: "",
    complete: "60%",
    expDate: "23",
    org: "Donation City",
    img: "https://hillrobinson.com/wp-content/uploads/2023/05/ChildVaccinated_UNF_Shotatlife_with-photo-credit-Resize-scaled.jpg",
  },
  {
    title: "Clothes drive",
    desc: "",
    complete: "85%",
    expDate: "06",
    org: "Human Foundation",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/02/gmb-akash-children-in-school-17.jpg",
  },
];

const donatedData = [
  {
    title: "Food drive ",
    desc: "",
    complete: "20%",
    expDate: "08",
    org: "Hope Charity",
    img: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    title: "School Supplies",
    desc: "",
    complete: "10%",
    expDate: "42",
    org: "Living Dreams",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAL6JiftJaq97lbItB1lBDeAtnZ47NRuFvdip5-3YdE0OgEO4vJ4koqYk2S3ZkREcp5hU&usqp=CAU",
  },
  {
    title: "Childrens education",
    desc: "",
    complete: "40%",
    expDate: "10",
    org: "Safe Kids Worldwide",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolrOl5szak8PpdtS81VfQYIE1v_r9C9bbcg&usqp=CAU",
  },
];

const Profile = () => {
  const user = useAuthListener();
  const [community, setCommunity] = useState([]);
  const [createdcommunity, setCreatedCommunity] = useState([]);

  useEffect(() => {
    const ref = query(collection(db, `users/${user}/joinedCommunity`));
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const announcementsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().communityData,
      }));
      setCommunity(announcementsData);
      console.log(announcementsData);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const ref = query(collection(db, `users/${user}/UserCreatedCommunity`));
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const announcementsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().communityData,
      }));
      setCreatedCommunity(announcementsData);
      console.log(announcementsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />

      <div className="Profile" style={{ marginTop: "6%" }}>
        <div className="backdrop"></div>
        <hr />
        <img
          src="https://faceswapper.ai/images/sample/female-face-1.jpg"
          className="avatar"
        />
        <div className="Name">
          Good Afternoon, <bold>Kir!</bold>
        </div>

        <div className="Bannerss">
          <div className="bannerTitle">
            YOUR CAMPAIGNS
            <div className="view">View All {">"}</div>
          </div>
          <div className="banners">
            {bannersData.map((bd) => (
              <div className="banner">
                <img src={bd.img} />
                <div className="bannerDesc">
                  <div>#Education</div>
                  <div className="titlee">{bd.title}</div>
                  <div className="spacee1">
                    <div>{bd.expDate}</div>
                    <div>{bd.complete}</div>
                  </div>
                  <div className="spacee2">
                    <div>Days left</div>
                    <div>{"   "} Completed</div>
                  </div>
                </div>
              </div>
            ))}
            <div></div>
          </div>{" "}
          <br />
          <div className="bannerTitle">
            DONATIONS
            <div className="view">View All {">"}</div>
          </div>
          <div className="banners">
            {donatedData.map((bd) => (
              <div className="banner">
                <img src={bd.img} />
                <div className="bannerDesc">
                  <div> Rs 400</div>
                  <div className="titlee">{bd.title}</div>
                  <div className="spacee1">
                    <div>{bd.expDate}</div>
                    <div>{bd.complete}</div>
                  </div>
                  <div className="spacee2">
                    <div>Days left</div>
                    <div>{"   "} Completed</div>
                  </div>
                  <div style={{ color: "white" }}>
                    <bold>BY </bold>
                    {bd.org}
                  </div>
                </div>
              </div>
            ))}
            <div></div>
          </div>
          <br />
          <br />
          <br />
          <div className="bannerTitle" style={{ marginTop: "-1%" }}>
            PAYMENT HISTORY
          </div>
          <table className="styledTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Organization</th>
                <th>Payment</th>
                <th>Date</th>
                <th>Acc No</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clothes drive</td>
                <td>Human Foundation</td>
                <td>6000</td>
                <td>26 Dec,22</td>
                <td>AC 521***</td>
                <td>verified</td>
              </tr>
              <tr class="active-row">
                <td>School Supplies</td>
                <td>Living Dreams</td>
                <td>8200</td>
                <td>21 Oct,22</td>
                <td>AC 511***</td>
                <td>pending</td>
              </tr>
              <tr>
                <td>Food drive</td>
                <td>Hopes n Dreams</td>
                <td>3400</td>
                <td>20 Dec,22</td>
                <td>AC 521***</td>
                <td>verified</td>
              </tr>
              <tr>
                <td>Clothes drive</td>
                <td>Human Foundation</td>
                <td>6000</td>
                <td>26 Dec,22</td>
                <td>AC 521***</td>
                <td>verified</td>
              </tr>
            </tbody>
          </table>
          <div className="bannerTitles">Your Joined Communities</div>
          <table className="styledTable">
            <tbody>
              {community.map((agency) => {
                return (
                  <tr>
                    <td>
                      <div>
                        <Avatar
                          className="ml-5 mr-5"
                          src={"../images/logo.png"}
                        />
                      </div>
                    </td>
                    <td>{agency.name}</td>
                    <td>{agency.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="bannerTitles">Your Joined Communities</div>
          <table className="styledTable">
            <tbody>
              {createdcommunity?.map((agency) => {
                return (
                  <tr>
                    <td>
                      <div>
                        <Avatar
                          className="ml-5 mr-5"
                          src={"../images/logo.png"}
                        />
                      </div>
                    </td>
                    <td>{agency.name}</td>
                    <td>{agency.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="Account">
          <div
            className="bannerTitle"
            style={{ marginTop: "-1%", marginLeft: "-3%" }}
          >
            ACCOUNT DETAILS
            <img
              style={{ width: "30px", marginLeft: "30%" }}
              src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-flat-ui-icon-of-a-horizontal-menu-with-three-dots-vector-png-image_12747613.png"
            />
          </div>
          <div className="Details">
            <div className="DetailsTitle">Email:</div>{" "}
            <div className="DetailsDesc">kirT@gmail.com</div>
          </div>
          <div className="Details">
            <div className="DetailsTitle">Password:</div>{" "}
            <div className="DetailsDesc">re*****</div>
          </div>
          <div className="Details">
            <div className="DetailsTitle">Name:</div>{" "}
            <div className="DetailsDesc">Kir T.</div>
          </div>
          <div className="Details">
            <div className="DetailsTitle">Address:</div>{" "}
            <div className="DetailsDesc">B/4, Oak Street</div>
          </div>
          <div className="Details">
            <div className="DetailsTitle">Medical:</div>{" "}
            <div className="DetailsDesc">Click to see</div>
          </div>
        </div>

        <div className="Statss">
          <div className="Stat1">
            <img
              style={{ width: "43px", borderRadius: "100%" }}
              src="https://garfieldparkacademy.org/wp-content/uploads/2018/04/hand_heart_donate_icon.png"
              alt=""
            />
            <div className="StatssRight">
              <div>COMMUNITIES</div>
              26
            </div>
          </div>
          <div className="Stat1">
            <img
              style={{ width: "43px", borderRadius: "100%" }}
              src="https://www.pngimages.in/uploads/png-webp/2023/2023-January/icon_Png_Transparent_Images.webp"
              alt=""
            />
            <div className="StatssRight">
              <div>DONATIONS</div>
              ₹11,0000
            </div>
          </div>
          <div className="Stat1">
            <img
              style={{ width: "43px", borderRadius: "100%" }}
              src="https://cdn-icons-png.flaticon.com/512/8399/8399026.png"
              alt=""
            />
            <div className="StatssRight">
              <div>STARTED</div>
              12
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
