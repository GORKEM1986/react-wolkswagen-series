import { Container, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50 m-auto "
        onChange={(e) => setSearch(e.target.value)}
      />

      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, index) => {
              return (
                <Col xl={3} lg={4} md={6} key={index}>
                  <PlayerCard {...player} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;
