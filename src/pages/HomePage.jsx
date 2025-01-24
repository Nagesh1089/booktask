import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Pagination,
  Container,
  Row,
  Col,
  Spinner,
  Modal,
  Form,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const [loader, setLoader] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'add' or 'edit'
  const [currentBook, setCurrentBook] = useState({
    id: "",
    title: "",
    body: "",
  });

  const navigate=useNavigate();

  // Fetch books from the API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setBooks(response.data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setBooks(books.filter((book) => book.id !== id));
      toast.success("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete the book. Please try again.");
    }
  };

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle modal show
  const handleShowModal = (type, book = { id: "", title: "", body: "" }) => {
    setModalType(type);
    setCurrentBook(book);
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentBook({ id: "", title: "", body: "" });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (modalType === "add") {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          currentBook
        );
        setBooks([...books, response.data]);
        toast.success("Book added successfully!");
      } catch (error) {
        console.error("Error adding book:", error);
        toast.error("Failed to add the book. Please try again.");
      }
    } else if (modalType === "edit") {
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${currentBook.id}`,
          currentBook
        );
        setBooks(
          books.map((book) => (book.id === currentBook.id ? currentBook : book))
        );
        toast.success("Book details updated successfully!");
      } catch (error) {
        console.error("Error updating book:", error);
        toast.error("Failed to update the book. Please try again.");
      }
    }
    handleCloseModal();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Pagination buttons
  const totalPages = Math.ceil(books.length / booksPerPage);
  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => paginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
<Container className="my-4">
  {loader ? (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status" />
    </div>
  ) : (
    <>
   <Row className="align-items-center">
  <Col md={8}>
    <h1 className="text-center mb-4">Book Inventory Management System</h1>
  </Col>
  <Col md={4} className="d-flex justify-content-end">
    <Button
      variant="success"
      onClick={() => handleShowModal("add")}
      className="mb-3"
    >
      Add Book
    </Button>
  </Col>
</Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book,i) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td
                style={{
                  cursor: "pointer",
                }}
                onClick={() => navigate(`details/${book.id}`)}
              >
                {book.title}
              </td>
              <td>{book.body}</td>
              <td>
                <ButtonGroup>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleShowModal("edit", book)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {books.length > booksPerPage && (
        <Pagination className="justify-content-center">
          {paginationItems}
        </Pagination>
      )}
    </>
  )}

  {/* Modal for Add/Edit Book */}
  <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>
        {modalType === "add" ? "Add Book" : "Edit Book"}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            className="shadow-none"
            value={currentBook.title}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, title: e.target.value })
            }
            required
          />
        </Form.Group>
        <Form.Group controlId="formBody">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            className="shadow-none"
            placeholder="Enter author"
            value={currentBook.body}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, body: e.target.value })
            }
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          {modalType === "add" ? "Add Book" : "Update Book"}
        </Button>
      </Form>
    </Modal.Body>
  </Modal>

  <ToastContainer />
</Container>
  );
};

export default HomePage;
