// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const EditBookPage = () => {
//   const { id } = useParams(); // Get book ID from URL
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: '',
//     body: '',
//   });

//   const fetchBookDetails = async () => {
//     try {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`); // Dummy API
//       setFormData({
//         title: response.data.title,
//         body: response.data.body,
//       });
//     } catch (error) {
//       console.error('Error fetching book details:', error);
//     }
//   };

//   useEffect(() => {
//     fetchBookDetails();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, formData); // Dummy API
//       navigate('/'); // Redirect to home after updating
//     } catch (error) {
//       console.error('Error updating book:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <h1>Edit Book</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Content:</label>
//           <textarea
//             name="body"
//             value={formData.body}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Update Book</button>
//       </form>
//     </div>
//   );
// };

// export default EditBookPage;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const EditBookPage = () => {
//   const { id } = useParams(); // Get book ID from URL
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     body: "",
//   });

//   const fetchBookDetails = async () => {
//     try {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//       ); // Dummy API
//       setFormData({
//         title: response.data.title,
//         body: response.data.body,
//       });
//     } catch (error) {
//       console.error("Error fetching book details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBookDetails();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `https://jsonplaceholder.typicode.com/posts/${id}`,
//         formData
//       ); // Dummy API
//       navigate("/"); // Redirect to home after updating
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">Edit Book</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label">
//             Title:
//           </label>
//           <input
//             type="text"
//             name="title"
//             id="title"
//             className="form-control shadow-none"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="body" className="form-label">
//             Content:
//           </label>
//           <textarea
//             name="body"
//             id="body"
//             className="form-control shadow-none"
//             value={formData.body}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Update Book
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditBookPage;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBookPage = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      ); // Dummy API
      setFormData({
        title: response.data.title,
        body: response.data.body,
      });
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        formData
      ); // Dummy API
      toast.success("The book has been updated successfully!", {
        position: "top-right",
        autoClose: 5000, // The toast disappears after 5 seconds
        hideProgressBar: false, // Show progress bar
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined, // React Toastify automatically manages the progress bar
      });
      setTimeout(() => {
        navigate("/"); // Redirect to home after updating
      }, 5000); // Wait until toast disappears before navigating
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("There was an error updating the book.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Edit Book</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control shadow-none"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Author:
          </label>
          <textarea
            name="body"
            id="body"
            className="form-control shadow-none"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Book
        </button>
      </form>

      {/* ToastContainer for React Toastify */}
      <ToastContainer />
    </div>
  );
};

export default EditBookPage;
