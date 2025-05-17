import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const RegisterForm = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/users`,
        data
      );

      if (response.status === 201) {
        navigate('/home'); // يرجعك للرئيسية بعد النجاح
      }

      console.log(response);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit(RegisterForm)}>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input {...register("userName")} type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input {...register("email")} type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input {...register("password")} type="password" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input {...register("phone")} type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}
