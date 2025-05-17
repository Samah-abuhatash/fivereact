import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { userid } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const getDetails = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASEURL}/users/${userid}`);
      setValue("userName", data.user.userName);
      setValue("email", data.user.email);
      setValue("password", data.user.password);
      setValue("phone", data.user.phone);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const updateForm = async (value) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASEURL}/users/${userid}`, {
        userName: value.userName,
        email: value.email,
        password: value.password,
        phone: value.phone,
      });
      navigate('/');
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>User Edit</h2>
      <form onSubmit={handleSubmit(updateForm)}>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input {...register("userName")} type="text" className="form-control"  />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input {...register("email")} type="email" className="form-control" placeholder disabled/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input {...register("password")} type="password" className="form-control"  placeholder disabled/>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input {...register("phone")} type="text" className="form-control" placeholder disabled />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default Edit;
