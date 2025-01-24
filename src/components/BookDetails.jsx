import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setBook(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching book details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status" />
      </Container>
    );
  }

  if (!book) {
    return (
      <Container className="text-center my-5">
        <p>Book not found.</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Book Title: {book.title}</Card.Title>

              <Card.Text>Author: {book.body}</Card.Text>
              <Button variant="primary" onClick={() => window.history.back()}>
                Go Back
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
