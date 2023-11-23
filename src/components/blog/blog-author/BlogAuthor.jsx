import React from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import "./styles.css";

export default function BlogAuthor(props) {
  const { name, avatar, loading, _id } = props;

  return loading ? (
    <div className="d-flex mt-5">
      <Spinner animation="border" variant="primary" className="mx-auto" />
    </div>
  ) : (
    <Row>
      <>
        <Col xs={"auto"} className="pe-0" key={_id}>
          <Image className="blog-author" src={avatar} roundedCircle />
        </Col>

        <Col className="d-flex align-items-center">
          <h6>di {name}</h6>
        </Col>
      </>
    </Row>
  );
}
