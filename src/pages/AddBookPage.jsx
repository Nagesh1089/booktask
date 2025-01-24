import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap"; // Keep only relevant imports here
import { ToastContainer, toast } from "react-toastify"; // Correct import for toast
import "react-toastify/dist/ReactToastify.css"; // Ensure you import the styles for react-toastify

const AddBookPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(false); // For handling the loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state when form is being submitted
    try {
      // Replace with your actual API URL
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      console.log(response)
      setFormData({ title: "", body: "" }); // Reset the form after successful submission
      toast.success("Book added successfully!", {
        onClose: () => {
          navigate("/"); // Navigate to homepage when toast is closed
        },
        autoClose: 5000, // Toast stays open for 5 seconds
      });
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Failed to add the book. Please try again.", {
        autoClose: 5000, // Toast stays open for 5 seconds
      });
    } finally {
      setLoading(false); // Reset loading state after the request is complete
    }
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Add New Book</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter book content"
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Book"}
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Toast container for success/error messages */}
      <ToastContainer />
    </Container>
  );
};

export default AddBookPage;
