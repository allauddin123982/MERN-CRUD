import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([ ]);

  useEffect(()=>{
    axios.get('http://localhost:9000')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id) => {
    axios.delete('http://localhost:9000/deleteUser/'+id)
    .then(res => {console.log(res)
                    window.location.reload()})
    .catch(error => console.log(error))
  }

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.namee}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className="btn btn-warning mx-2">
                        Update
                      </Link>
                      <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
