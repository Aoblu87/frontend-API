import React from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import "./styles.css";

export default function BlogAuthor(loading, author) {
  // const { name, avatar } = props;
  // const [authors, setAuthors] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:3001/api/authors/655f184e8f9470487ace52d4"
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     setAuthors(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   makeAPICall();
  // }, []);

  return loading ? (
    <div className="d-flex mt-5">
      <Spinner animation="border" variant="primary" className="mx-auto" />
    </div>
  ) : (
    <Row>
      {/* {authors.map((author) => ( */}
      <>
        <Col xs={"auto"} className="pe-0" key={author._id}>
          <Image className="blog-author" src={author.avatar} roundedCircle />
        </Col>

        <Col className="d-flex align-items-center">
          <h6>di {author.nome}</h6>
        </Col>
      </>
      {/* ))} */}
    </Row>
  );
}
