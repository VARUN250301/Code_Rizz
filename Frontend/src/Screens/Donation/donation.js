import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Category from "../../components/Category/Category";
import Trends from "../../components/Category/Trends";
import slides from "../../mock.json";
import Navbar from "../../components/Navbar/Navbar";

function Donation() {
  return (
    <div>
      <Navbar/>
      <div style={{marginTop:'10vw'}}></div>
      <Trends slides={slides} />
      <Category />
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
