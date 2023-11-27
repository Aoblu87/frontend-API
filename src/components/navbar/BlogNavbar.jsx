import React from "react";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";
const NavBar = (props) => {
  const { query, setQuery, setResult } = props;

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/blogPosts/?title=${query}`
      );

      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }

      const data = await response.json();
      console.log("Risultato della ricerca:", data.blogPosts);

      // Aggiorna lo stato con i risultati della ricerca
      setResult(data.blogPosts);
    } catch (errore) {
      console.error("Errore durante la ricerca:", errore.message);
    }
  };
  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-center justify-content-md-between">
        <Col xs={6} md={4} className="me-2 mb-3">
          <Navbar.Brand as={Link} to="/">
            <img className="blog-navbar-brand" alt="logo" src={logo} />
          </Navbar.Brand>
        </Col>
        <Col md={4} xs={{ span: 12, order: 2 }} className="order-sm-2">
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="text"
              value={query}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Col>
        <Col xs={5} md={{ span: 1, order: 2 }}>
          <Button
            as={Link}
            to="/new"
            className="blog-navbar-add-button bg-dark fs-6 "
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Nuovo Articolo
          </Button>
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBar;
