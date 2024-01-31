import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Category from "../../components/Category/Category";
import Trends from "../../components/Category/Trends";
import slides from "../../mock.json";
import Navbar from "../../components/Navbar/Navbar";

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
  {
    title: "Clothes drive",
    desc: "",
    complete: "85%",
    expDate: "06",
    org: "Human Foundation",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/02/gmb-akash-children-in-school-17.jpg",
  },
  {
    title: "Clothes drive",
    desc: "",
    complete: "85%",
    expDate: "06",
    org: "Human Foundation",
    img: "https://mymodernmet.com/wp/wp-content/uploads/2021/02/gmb-akash-children-in-school-17.jpg",
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

const coreValue = [
  {
    Type: "Engage stakeholders",
    Name: "Public-Private Partnerships (PPP) in Infrastructure",
    About:
      "Involves collaboration between the government and private sector stakeholders for infrastructure development.",
    Metrics: "Number of infrastructure projects in collaboration",
    PotentialImpactMetric:
      "A 10% increase in the number of infrastructure projects in collaboration",
    SuccessStory:
      "PPP in Infrastructure saw a 10% increase in the number of successful collaborations, benefitting both public and private stakeholders.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECLqvE1Y2jzj36brUEv_gEk5SwF1IepoMOxcZ4n_9oB5U6xNuXZGwE3BIfJi-n6wVFL4&usqp=CAU",
  },

  {
    Type: "Engage stakeholders",
    Name: "Public-Private Partnerships (PPP) in Infrastructure",
    About:
      "Involves collaboration between the government and private sector stakeholders for infrastructure development.",
    Metrics: "Number of infrastructure projects in collaboration",
    PotentialImpactMetric:
      "A 10% increase in the number of infrastructure projects in collaboration",
    SuccessStory:
      "PPP in Infrastructure saw a 10% increase in the number of successful collaborations, benefitting both public and private stakeholders.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECLqvE1Y2jzj36brUEv_gEk5SwF1IepoMOxcZ4n_9oB5U6xNuXZGwE3BIfJi-n6wVFL4&usqp=CAU",
  },

  {
    Type: "Engage stakeholders",
    Name: "Public-Private Partnerships (PPP) in Infrastructure",
    About:
      "Involves collaboration between the government and private sector stakeholders for infrastructure development.",
    Metrics: "Number of infrastructure projects in collaboration",
    PotentialImpactMetric:
      "A 10% increase in the number of infrastructure projects in collaboration",
    SuccessStory:
      "PPP in Infrastructure saw a 10% increase in the number of successful collaborations, benefitting both public and private stakeholders.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECLqvE1Y2jzj36brUEv_gEk5SwF1IepoMOxcZ4n_9oB5U6xNuXZGwE3BIfJi-n6wVFL4&usqp=CAU",
  },
  {
    Type: "Engage stakeholders",
    Name: "Public-Private Partnerships (PPP) in Infrastructure",
    About:
      "Involves collaboration between the government and private sector stakeholders for infrastructure development.",
    Metrics: "Number of infrastructure projects in collaboration",
    PotentialImpactMetric:
      "A 10% increase in the number of infrastructure projects in collaboration",
    SuccessStory:
      "PPP in Infrastructure saw a 10% increase in the number of successful collaborations, benefitting both public and private stakeholders.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECLqvE1Y2jzj36brUEv_gEk5SwF1IepoMOxcZ4n_9oB5U6xNuXZGwE3BIfJi-n6wVFL4&usqp=CAU",
  },
  {
    Type: "Engage stakeholders",
    Name: "Public-Private Partnerships (PPP) in Infrastructure",
    About:
      "Involves collaboration between the government and private sector stakeholders for infrastructure development.",
    Metrics: "Number of infrastructure projects in collaboration",
    PotentialImpactMetric:
      "A 10% increase in the number of infrastructure projects in collaboration",
    SuccessStory:
      "PPP in Infrastructure saw a 10% increase in the number of successful collaborations, benefitting both public and private stakeholders.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECLqvE1Y2jzj36brUEv_gEk5SwF1IepoMOxcZ4n_9oB5U6xNuXZGwE3BIfJi-n6wVFL4&usqp=CAU",
  },
];

function Donation() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="Bannerss">
          <div className="bannerTitle">
            YOUR CAMPAIGNS
            <div className="view">View All {">"}</div>
          </div>
          <div
            className="banners row"
            style={{ marginLeft: "250px", width: "86vw" }}
          >
            {coreValue.map((bd) => (
              <div className="col-md-4 mb-4">
                <div className="banner">
                  <img src={bd.img} />
                  <div className="bannerDesc">
                    <div>{bd.Type}</div>
                    <div className="titlee">{bd.Name}</div>
                    <div
                      style={{
                        textAlign: "start",
                        color: "white",
                      }}
                    >
                      <div>Metrics</div>
                      <div style={{ fontWeight: "normal" }}>{bd.Metrics}</div>
                      <div>PotentialImpactMetric</div>
                      <div style={{ fontWeight: "normal" }}>
                        {bd.PotentialImpactMetric}
                      </div>
                    </div>
                    <div className="spacee2">
                      <div>Days left</div>
                      <div>{"   "} Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div></div>
          </div>{" "}
          <br />
        </div>
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
