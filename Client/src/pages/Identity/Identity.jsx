import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./Identity.css";

const Identity = () => {
  const user = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <>
      <div className="sidenav">
        <div className="profile">
          <img src={user?.users?.user?.img} alt="" width="100" height="100" />

          <div className="name">
            {user?.users?.user?.firstName + " " + user?.users?.user?.lastName}
          </div>
          <div className="job">{user?.users?.user?.profession}</div>
        </div>

        <div className="sidenav-url">
          <div className="url">
            <Button
              style={{ width: "120px" }}
              onClick={() => {
                navigate("/profile");
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Profile
            </Button>
            <hr />
          </div>
          <div className="url">
            <Button
              style={{ width: "120px" }}
              onClick={() => {
                navigate("/identity");
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Identity
            </Button>
            <hr />
          </div>
          <div className="url">
            <Button
              style={{ width: "120px" }}
              onClick={() => {
                navigate("/settings");
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Settings
            </Button>
            <hr />
          </div>
        </div>
      </div>
      <div className="main-profile">
        <h2>IDENTITY</h2>
        <div className="card">
          <div className="card-body">
            <i className="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                <tr>
                  <td className="label">Name</td>
                  <td>{user?.users?.user?.firstName}</td>
                </tr>
                <tr>
                  <td className="label">Lastname</td>
                  <td>{user?.users?.user?.lastName}</td>
                </tr>
                <tr>
                  <td className="label">Email</td>
                  <td>{user?.users?.user?.email}</td>
                </tr>
                <tr>
                  <td className="label">Address</td>
                  <td>{user?.users?.user?.address}</td>
                </tr>
                <tr>
                  <td className="label">Hobbies</td>
                  <td>{user?.users?.user?.hobbies}</td>
                </tr>
                <tr>
                  <td className="label">Job</td>
                  <td>{user?.users?.user?.profession}</td>
                </tr>
                <tr>
                  <td className="label">Skills</td>
                  <td>{user?.users?.user?.skills}</td>
                </tr>
                <tr>
                  <td className="label">Gender</td>
                  <td>{user?.users?.user?.gender}</td>
                </tr>
                <tr>
                  <td className="label">Relationship</td>
                  <td>{user?.users?.user?.relationship}</td>
                </tr>
                <tr>
                  <td className="label">Birthday</td>
                  <td>{user?.users?.user?.birthday}</td>
                </tr>
                <tr>
                  <td className="label">Language</td>
                  <td>{user?.users?.user?.language}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Identity;
