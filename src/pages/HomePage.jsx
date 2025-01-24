// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Dummy API
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div>
//       <h1>Book Inventory</h1>
//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id}>
//               <td>{book.id}</td>
//               <td>{book.title}</td>
//               <td>{book.body}</td>
//               <td>
//                 <button onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
//                 <button onClick={() => navigate(`/details/${book.id}`)}>Details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   // Fetch books from the API
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Dummy API
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   // Handle book deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // Dummy API
//       alert('Book deleted successfully!');
//       setBooks(books.filter((book) => book.id !== id)); // Update the local state
//     } catch (error) {
//       console.error('Error deleting book:', error);
//       alert('Failed to delete the book. Please try again.');
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div>
//       <h1>Book Inventory</h1>
//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Content</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         {
//           console.log(books)
//         }
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id}>
//               <td>{book.id}</td>
//               <td>{book.title}</td>
//               <td>{book.body}</td>
//               <td>
//                 {/* Edit Button */}
//                 <button onClick={() => navigate(`/edit/${book.id}`)} style={{ marginRight: '10px' }}>
//                   Edit
//                 </button>
//                 {/* Details Button */}
//                 <button onClick={() => navigate(`/details/${book.id}`)} style={{ marginRight: '10px' }}>
//                   Details
//                 </button>
//                 {/* Delete Button */}
//                 <button
//                   onClick={() => handleDelete(book.id)}
//                   style={{ color: 'white', backgroundColor: 'red' }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   Button,
//   Pagination,
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [booksPerPage] = useState(5); // Number of books per page
//   const navigate = useNavigate();

//   // Fetch books from the API
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       ); // Dummy API
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Handle book deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // Dummy API
//       alert("Book deleted successfully!");
//       setBooks(books.filter((book) => book.id !== id)); // Update the local state
//     } catch (error) {
//       console.error("Error deleting book:", error);
//       alert("Failed to delete the book. Please try again.");
//     }
//   };

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Pagination logic
//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

//   // Pagination buttons
//   const totalPages = Math.ceil(books.length / booksPerPage);
//   const paginationItems = [];
//   for (let i = 1; i <= totalPages; i++) {
//     paginationItems.push(
//       <Pagination.Item
//         key={i}
//         active={i === currentPage}
//         onClick={() => paginate(i)}
//       >
//         {i}
//       </Pagination.Item>
//     );
//   }

//   return (
//     <Container className="my-4">
//       <Row className="justify-content-center">
//         <Col md={12}>
//           <h1 className="text-center mb-4">Book Inventory</h1>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBooks.map((book) => (
//                 <tr key={book.id}>
//                   <td>{book.id}</td>
//                   <td>{book.title}</td>
//                   <td>{book.body}</td>
//                   <td>
//                     <Button
//                       variant="primary"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => navigate(`/edit/${book.id}`)}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="info"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => navigate(`/details/${book.id}`)}
//                     >
//                       Details
//                     </Button>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(book.id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           {/* Pagination */}
//           {books.length > booksPerPage && (
//             <Pagination className="justify-content-center">
//               {paginationItems}
//             </Pagination>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HomePage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   Button,
//   Pagination,
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [booksPerPage] = useState(5); // Number of books per page
//   const navigate = useNavigate();

//   // Fetch books from the API
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       ); // Dummy API
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Handle book deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // Dummy API
//       alert("Book deleted successfully!");
//       setBooks(books.filter((book) => book.id !== id)); // Update the local state
//     } catch (error) {
//       console.error("Error deleting book:", error);
//       alert("Failed to delete the book. Please try again.");
//     }
//   };

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Pagination logic
//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

//   // Pagination buttons
//   const totalPages = Math.ceil(books.length / booksPerPage);
//   const paginationItems = [];
//   for (let i = 1; i <= totalPages; i++) {
//     paginationItems.push(
//       <Pagination.Item
//         key={i}
//         active={i === currentPage}
//         onClick={() => paginate(i)}
//       >
//         {i}
//       </Pagination.Item>
//     );
//   }

//   return (
//     <Container className="my-4">
//       <Row className="justify-content-center">
//         <Col md={12}>
//           <h1 className="text-center mb-4">Book Inventory</h1>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBooks.map((book) => (
//                 <tr key={book.id}>
//                   <td>{book.id}</td>
//                   <td
//                     style={{
//                       cursor: "pointer",
//                       color: "blue",
//                       textDecoration: "underline",
//                     }}
//                     onClick={() => navigate(`/details/${book.id}`)} // Navigate on click
//                   >
//                     {book.title}
//                   </td>
//                   <td>{book.body}</td>
//                   <td>
//                     <Button
//                       variant="primary"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => navigate(`/edit/${book.id}`)}
//                     >
//                       Edit
//                     </Button>
//                     {/* <Button
//                       variant="info"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => navigate(`/details/${book.id}`)}
//                     >
//                       Details
//                     </Button> */}
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(book.id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           {/* Pagination */}
//           {books.length > booksPerPage && (
//             <Pagination className="justify-content-center">
//               {paginationItems}
//             </Pagination>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   Button,
//   Pagination,
//   Container,
//   Row,
//   Col,
// } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [booksPerPage] = useState(5); // Number of books per page
//   const navigate = useNavigate();
//   const [loader,setLoader]=useState(true)

//   // Fetch books from the API
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       ); // Dummy API
//       setBooks(response.data);
//       setLoader(false)
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Handle book deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // Dummy API
//       setBooks(books.filter((book) => book.id !== id)); // Update the local state
//       toast.success("Book deleted successfully!"); // Success toast
//     } catch (error) {
//       console.error("Error deleting book:", error);
//       toast.error("Failed to delete the book. Please try again."); // Error toast
//     }
//   };

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Pagination logic
//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

//   // Pagination buttons
//   const totalPages = Math.ceil(books.length / booksPerPage);
//   const paginationItems = [];
//   for (let i = 1; i <= totalPages; i++) {
//     paginationItems.push(
//       <Pagination.Item
//         key={i}
//         active={i === currentPage}
//         onClick={() => paginate(i)}
//       >
//         {i}
//       </Pagination.Item>
//     );
//   }

//   return (

//     <Container className="my-4">
//       <Row className="justify-content-center">
//         <Col md={12}>
//           <h1 className="text-center mb-4">Book Inventory</h1>

//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentBooks.map((book) => (
//                 <tr key={book.id}>
//                   <td>{book.id}</td>
//                   <td
//                     style={{
//                       cursor: "pointer",

//                     }}
//                     onClick={() => navigate(`/details/${book.id}`)}
//                   >
//                     {book.title}
//                   </td>
//                   <td>{book.body}</td>
//                   <td>
//                     <ButtonGroup>
//                       <Button
//                         variant="primary"
//                         size="sm"
//                         onClick={() => navigate(`/edit/${book.id}`)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="danger"
//                         size="sm"
//                         onClick={() => handleDelete(book.id)}
//                       >
//                         Delete
//                       </Button>
//                     </ButtonGroup>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>

//           {/* Pagination */}
//           {books.length > booksPerPage && (
//             <Pagination className="justify-content-center">
//               {paginationItems}
//             </Pagination>
//           )}
//         </Col>
//       </Row>
//       {/* Toast container */}
//       <ToastContainer />
//     </Container>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   Button,
//   Pagination,
//   Container,
//   Row,
//   Col,
//   Spinner, // Import Spinner from react-bootstrap
// } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [booksPerPage] = useState(5); // Number of books per page
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(true);

//   // Fetch books from the API
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       ); // Dummy API
//       setBooks(response.data);
//       setLoader(false);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Handle book deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // Dummy API
//       setBooks(books.filter((book) => book.id !== id)); // Update the local state
//       toast.success("Book deleted successfully!"); // Success toast
//     } catch (error) {
//       console.error("Error deleting book:", error);
//       toast.error("Failed to delete the book. Please try again."); // Error toast
//     }
//   };

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Pagination logic
//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

//   // Pagination buttons
//   const totalPages = Math.ceil(books.length / booksPerPage);
//   const paginationItems = [];
//   for (let i = 1; i <= totalPages; i++) {
//     paginationItems.push(
//       <Pagination.Item
//         key={i}
//         active={i === currentPage}
//         onClick={() => paginate(i)}
//       >
//         {i}
//       </Pagination.Item>
//     );
//   }

//   return (
//     <Container className="my-4">
//       <Row className="justify-content-center">
//         <Col md={12}>
//           <h1 className="text-center mb-4">Book Inventory</h1>

//           {/* Show Loader while fetching data */}
//           {loader ? (
//             <div className="d-flex justify-content-center">
//               <Spinner animation="border" role="status" />
//             </div>
//           ) : (
//             <>
//               <Table striped bordered hover responsive>
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Author</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentBooks.map((book) => (
//                     <tr key={book.id}>
//                       <td>{book.id}</td>
//                       <td
//                         style={{
//                           cursor: "pointer",
//                         }}
//                         onClick={() => navigate(`/details/${book.id}`)}
//                       >
//                         {book.title}
//                       </td>
//                       <td>{book.body}</td>
//                       <td>
//                         <ButtonGroup>
//                           <Button
//                             variant="primary"
//                             size="sm"
//                             onClick={() => navigate(`/edit/${book.id}`)}
//                           >
//                             Edit
//                           </Button>
//                           <Button
//                             variant="danger"
//                             size="sm"
//                             onClick={() => handleDelete(book.id)}
//                             className=""
//                           >
//                             Delete
//                           </Button>
//                         </ButtonGroup>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>

//               {/* Pagination */}
//               {books.length > booksPerPage && (
//                 <Pagination className="justify-content-center">
//                   {paginationItems}
//                 </Pagination>
//               )}
//             </>
//           )}
//         </Col>
//       </Row>

//       {/* Toast container */}
//       <ToastContainer />
//     </Container>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   Button,
//   Pagination,
//   Container,
//   Row,
//   Col,
//   Spinner, // Import Spinner from react-bootstrap
// } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

// const HomePage = () => {
//   const [books, setBooks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [booksPerPage] = useState(5); // Number of books per page
//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(true);

//   // Fetch books from the API
//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       ); // Dummy API
//       setBooks(response.data);
//       setLoader(false);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Handle book deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`); // Dummy API
//       setBooks(books.filter((book) => book.id !== id)); // Update the local state
//       toast.success("Book deleted successfully!"); // Success toast
//     } catch (error) {
//       console.error("Error deleting book:", error);
//       toast.error("Failed to delete the book. Please try again."); // Error toast
//     }
//   };

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Pagination logic
//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;
//   const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

//   // Pagination buttons
//   const totalPages = Math.ceil(books.length / booksPerPage);
//   const paginationItems = [];
//   for (let i = 1; i <= totalPages; i++) {
//     paginationItems.push(
//       <Pagination.Item
//         key={i}
//         active={i === currentPage}
//         onClick={() => paginate(i)}
//       >
//         {i}
//       </Pagination.Item>
//     );
//   }

//   return (
//     <Container className="my-4">
//       <Row className="justify-content-center">
//         <Col md={12}>
//           <h1 className="text-center mb-4">Book Inventory</h1>

//           {/* Show Loader while fetching data */}
//           {loader ? (
//             <div className="d-flex justify-content-center">
//               <Spinner animation="border" role="status" />
//             </div>
//           ) : (
//             <>
//               <Table striped bordered hover responsive>
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Author</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentBooks.map((book) => (
//                     <tr key={book.id}>
//                       <td>{book.id}</td>
//                       <td
//                         style={{
//                           cursor: "pointer",
//                         }}
//                         onClick={() => navigate(`/details/${book.id}`)}
//                       >
//                         {book.title}
//                       </td>
//                       <td>{book.body}</td>
//                       <td>
//                         <ButtonGroup>
//                           <Button
//                             variant="primary"
//                             size="sm"
//                             onClick={() => navigate(`/edit/${book.id}`)}
//                           >
//                             Edit
//                           </Button>
//                           <Button
//                             variant="danger"
//                             size="sm"
//                             onClick={() => handleDelete(book.id)}
//                             className=""
//                           >
//                             Delete
//                           </Button>
//                         </ButtonGroup>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>

//               {/* Pagination */}
//               {books.length > booksPerPage && (
//                 <Pagination className="justify-content-center">
//                   {paginationItems}
//                 </Pagination>
//               )}
//             </>
//           )}
//         </Col>
//       </Row>

//       {/* Toast container */}
//       <ToastContainer />
//     </Container>
//   );
// };

// export default HomePage;

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
