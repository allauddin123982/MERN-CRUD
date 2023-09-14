import React, { useState } from "react";
import axios from "axios";
const CreateEmployee = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/employee/CreateEmployee", form)
      .then((response) => {
        console.log({ response });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <>
      <div className="d-flex bg-dark vh-100 justify-content-center">
        <div>

          <form onSubmit={handleSubmit} className="bg-white p-5 mt-5">
            <h2>Add Employee</h2>
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
              {/* <p className="text-danger">{error}</p> */}
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Salary:
              </label>
              <input
                type="text"
                name="salary"
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

export default CreateEmployee;
