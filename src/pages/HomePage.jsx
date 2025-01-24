
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Button,
  Pagination,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchBooks();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

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
      <Row className="justify-content-between">
        <Col md={8}>
          <h1 className="text-center mb-4">Book Inventory</h1>
        </Col>
        <Col md={4} className="text-right">
          <Button
            variant="success"
            onClick={() => navigate("/add-book")}
            className="mb-3"
          >
            Add Book
          </Button>
        </Col>
      </Row>

      {loader ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <>
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
              {currentBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/details/${book.id}`)}
                  >
                    {book.title}
                  </td>
                  <td>{book.body}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => navigate(`/edit/${book.id}`)}
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

      <ToastContainer />
    </Container>
  );
};

export default HomePage;
