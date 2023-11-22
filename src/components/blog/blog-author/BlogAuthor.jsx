import React, { useEffect, useState } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import "./styles.css";

export default function BlogAuthor() {
  // const { name, avatar } = props;
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const makeAPICall = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/authors/655cf8a511702bc83d63dc86"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setAuthors(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  return loading ? (
    <div className="d-flex mt-5">
      <Spinner animation="border" variant="primary" className="mx-auto" />{" "}
    </div>
  ) : (
    <Row>
      {/* {authors.map((author) => ( */}
      <>
        <Col xs={"auto"} className="pe-0" key={authors._id}>
          <Image className="blog-author" src={authors.avatar} roundedCircle />
        </Col>

        <Col className="d-flex align-items-center">
          <h6>di {authors.nome}</h6>
        </Col>
      </>
      {/* ))} */}
    </Row>
  );
}
