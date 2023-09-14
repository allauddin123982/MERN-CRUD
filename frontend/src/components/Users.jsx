import React, { useEffect, useState } from "react";
import { DotWave } from "@uiball/loaders";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineCheck, AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";

import { RxCross2 } from "react-icons/rx";
import Employee from "./Employee";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [agee, setAgee] = useState(0);
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
      .get("http://localhost:9000/getFalse/")
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

  const handleDesSort = () => {
    axios
      .get("http://localhost:9000/getDesSort")
      .then((result) => {
        setTimeout(() => {
          setUsers(result.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  const handleAscSort = () => {
    axios
      .get("http://localhost:9000/getAscSort")
      .then((result) => {
        setTimeout(() => {
          setUsers(result.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  const handleNameSort = () => {
    axios
      .get("http://localhost:9000/getNameSort")
      .then((result) => {
        setTimeout(() => {
          setUsers(result.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  const handleAgeSort = () => {
    axios
      .get("http://localhost:9000/getAgeSort")
      .then((result) => {
        setTimeout(() => {
          setUsers(result.data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  const handleAgeFilter = () => {
    if (agee >= 30) {
      setUsers(users.filter((each) => each.age >= 30));
    } else if (agee <= 29) {
      setUsers(users.filter((each) => each.age <= 29));
    }
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
      <div className="d-flex bg-dark vh-50 justify-content-center">

        <p className="pt-5 text-warning fw-bold fs-5">Users</p>
        <div className="p-5 d-flex bg-dark vh-50 justify-content-center">
        
          <div className="w-50 rounded p-3 ">
            <Link to={"/create"}>
              <button className="btn btn-success ">Add Record</button>
            </Link>

            <div className="float-right"> Total records : {users.length}</div>
            <table className="table mt-4 p-5">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Status</th>
                  <th>Score</th>
                  <th>Action</th>
                </tr>
              </thead>
              {loading ? (
                <div className="dot-wave ">
                  <div className="dot-wave__dot"></div>
                  <div className="dot-wave__dot"></div>
                  <div className="dot-wave__dot"></div>
                  <div className="dot-wave__dot"></div>
                </div>
              ) : users.length > 0 ? (
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className={`${
                        user.score >= 50 ? "bg-danger" : "bg-success"
                      }`}
                    >
                      <td>{user.namee}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        {user.score >= 50 ? <AiOutlineCheck /> : <RxCross2 />}
                      </td>
                      <td>{user.score}</td>
                      <td>
                        <Link
                          to={`/update/${user._id}`}
                          className="btn btn-warning mx-2"
                        >
                          <AiTwotoneEdit />
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user._id)}
                        >
                          <AiTwotoneDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <p className="mt-2">No such records</p>
              )}
            </table>
            <div className="d-flex gap-2  flex-wrap">
              <button className="btn btn-success" onClick={handleTrue}>
                show only true
              </button>
              <button className="btn btn-success" onClick={handleFalse}>
                show only false
              </button>
              <button className="btn btn-success" onClick={handleAll}>
                show All
              </button>
              <button className="btn btn-success" onClick={handleDesSort}>
                Sort in Descending
              </button>
              <button className="btn btn-success" onClick={handleAscSort}>
                Sort in Ascending
              </button>
              <button className="btn btn-success" onClick={handleNameSort}>
                Sort by Name
              </button>
              <button className="btn btn-success" onClick={handleAgeSort}>
                Sort by Age
              </button>
              <input
                type="number"
                placeholder="Enter your age"
                onChange={(e) => setAgee(e.target.value)}
              />
              <button className="btn btn-success" onClick={handleAgeFilter}>
                show above 30
              </button>
            </div>
          </div>
        </div>
      </div>
      <DotWave size={47} speed={1} color="white" />
      <Employee />
    </>
  );
};

export default Users;
