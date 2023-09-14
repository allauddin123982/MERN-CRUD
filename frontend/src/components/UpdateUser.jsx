import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";//useParams -> to access route parameters from the URL
const UpdateUser = () => {
  const [form, setForm] = useState({});
  const { id } = useParams(); 
  const navigate = useNavigate();
  function handleSubmitUpdate(e) {
    e.preventDefault();
    axios.put("http://localhost:9000/" + id, form)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios.get("http://localhost:9000/" + id)
      .then((result) => {
        setForm(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //checking the update field recieved the data from backend successfully
  useEffect(() => {
    console.log({ form });
  }, [form]);

  return (
    <>
      <div className="d-flex vh-100 justify-content-center mt-5">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmitUpdate}>
            <h2>Update user</h2>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                value={form.namee}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, namee: e.target.value }))
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              
            </div>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Age:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                value={form.age}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, age: e.target.value }))
                }
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
                value={form.score}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, score: e.target.value }))
                }
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Status:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                value={form.statuss}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, statuss: e.target.value }))
                }
              />
            </div> */}

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
