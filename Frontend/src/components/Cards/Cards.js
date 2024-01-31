import Button from "react-bootstrap/Button";
  import Card from "react-bootstrap/Card";
  import CardGroup from "react-bootstrap/CardGroup";

function Cards() {
  return (
    <CardGroup style={{ marginBottom: "10px" }}>
      <Card
        style={{
          width: "18rem",
          marginLeft: "10px",
          marginRight: "10px",
          marginBottom: "5px",
        }}
      >
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolrOl5szak8PpdtS81VfQYIE1v_r9C9bbcg&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", marginLeft: "20px" }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", marginLeft: "20px" }}>
        <Card.Img variant="top" src="https://hillrobinson.com/wp-content/uploads/2023/05/ChildVaccinated_UNF_Shotatlife_with-photo-credit-Resize-scaled.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Cards;
