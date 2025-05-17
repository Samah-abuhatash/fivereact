import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';  // استيراد ToastContainer مع toast
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASEURL}/users`);
      setUsers(data.users);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError("Sorry, page not found");
      } else {
        setError("An error occurred while fetching users.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASEURL}/users/${id}`);
      console.log(response);
      toast.success('User deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      const newUsers = users.filter(user => user._id !== id);
      setUsers(newUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error('Failed to delete user', {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

  if (error) {
    return <div className='text-danger'>{error}</div>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>Home</div>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/details/${user._id}`} className='btn btn-primary'>
                  Details
                </Link>{' '}
                <button 
                  className='btn btn-danger' 
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>{' '}
                <Link to={`/edit/${user._id}`} className='btn btn-primary'>
                  Edit
                </Link>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* لازم تضيف ToastContainer هنا عشان تظهر التوستات */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Home;
