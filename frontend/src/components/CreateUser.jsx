import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
                    //  route name                  passing data
    axios.post("http://localhost:9000/CreateUser", form)
      .then((result) => {
        console.log(result)
        navigate("/");
      })
      .catch((err) => {
        // Set the error state with the error message
        setError(err.response.data.error);
      });
  }
  return (
    <>
    
         <div className="d-flex vh-100 justify-content-center mt-5">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Add user</h2>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name:
              </label>
              <input
                name="namee"
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
              <p className="text-danger">{error}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Age:
              </label>
              <input
                type="text"
                name="age"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Score:
              </label>
              <input
                type="text"
                name="score"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                onChange={handleChange}
              />
            </div>
            
           
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
