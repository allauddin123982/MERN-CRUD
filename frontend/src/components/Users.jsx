import React, { useEffect, useState } from "react";
import { DotWave } from "@uiball/loaders";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    handleAll();
  }, []);

  const handleTrue = () => {
    axios
      .get("http://localhost:9000/getTrue/")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
    console.log({ users });
  };

  const handleFalse = () => {
    axios
      .get("http://localhost:9000/getFalse")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
    console.log({ users });
  };

  const handleAll = () => {
    axios
      .get("http://localhost:9000")
      .then((result) => {
        setTimeout(() => {
          setUsers(result.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:9000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="d-flex vh-100 justify-content-center mt-5">
        <div className="w-50 bg-white rounded p-3">
          <Link to={"/create"}>
            <button className="btn btn-success">Add Record</button>
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {loading ? (
              <div className="dot-wave">
                <div className="dot-wave__dot"></div>
                <div className="dot-wave__dot"></div>
                <div className="dot-wave__dot"></div>
                <div className="dot-wave__dot"></div>
              </div>
            ) : users.length > 0 ? (
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.namee}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      {user.statuss === true ? (
                        <AiOutlineCheck />
                      ) : (
                        <RxCross2 />
                      )}
                    </td>

                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-warning mx-2"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <p className="mt-2">No such records</p>
            )}
          </table>
          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={handleTrue}>
              show only true
            </button>
            <button className="btn btn-primary" onClick={handleFalse}>
              show only false
            </button>
            <button className="btn btn-primary" onClick={handleAll}>
              show All
            </button>
          </div>
        </div>
      </div>
      <DotWave size={47} speed={1} color="black" />
    </>
  );
};

export default Users;
