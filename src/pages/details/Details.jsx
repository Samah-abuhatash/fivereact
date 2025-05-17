import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { userid } = useParams();
  const [user, setUser] = useState(null);

  const getDetails = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASEURL}/users/${userid}`);
      console.log(data.user);
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (!user) {
    return <div className="container"><p>Loading user details...</p></div>;
  }

  return (
    <div className="container">
      <h2>User Details</h2>
      <h3>Name: {user.userName}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Phone: {user.phone}</h3>
    </div>
  );
}

export default Details;
