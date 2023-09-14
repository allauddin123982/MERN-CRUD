import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Employee = () => {
  return (
    <>
      <div className="d-flex bg-dark vh-50 justify-content-center">
        <div>
          <p className="pt-5 text-warning fw-bold fs-5">Employees</p>
          <Link to={"/CreateEmp"}>
            <button className="btn btn-success">Add record</button>
          </Link>

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
            <tbody>
              <tr>
                <td>ali</td>
                <td>ali@gmail.com</td>
                <td>21</td>
                <td>true</td>
                <td>50</td>
                <td>
                  <button className="btn btn-warning">update</button>{" "}
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employee;
