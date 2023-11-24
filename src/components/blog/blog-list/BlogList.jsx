import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const { query, result } = props;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/blogPosts");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // Funzione ricerca per titolo

  // const searchResult = (post) =>
  //   post.title.toLowerCase().includes(query.toLowerCase());

  return loading ? (
    <div className="d-flex mt-5">
      <Spinner animation="border" variant="primary" className="mx-auto" />
    </div>
  ) : (
    <Row>
      {posts.map((post, i) => (
        <Col
          key={`item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} loading={loading} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
