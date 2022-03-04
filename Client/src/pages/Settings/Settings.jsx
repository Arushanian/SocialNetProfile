import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { NavLink, useNavigate } from "react-router-dom";
import userService from "./../../api/user.service";
import "./Settings.css";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../api/auth.service";
import { userConstants } from "../../constants";

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.users?.user);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [relationship, setRelationship] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [language, setLanguage] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [skills, setSkills] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName ? firstName : user?.firstName,
      lastName: lastName ? lastName : user?.lastName,
      email: email ? email : user?.email,
      password: password ? password : user?.password,
      relationship: relationship ? relationship : user?.relationship,
      birthday: birthday ? birthday : user?.birthday,
      address: address ? address : user?.address,
      language: language ? language : user?.language,
      hobbies: hobbies ? hobbies : user?.hobbies,
      skills: skills ? skills : user?.skills,
      img: img ? img : user?.img,
    };
    await userService.updateUser(data);
    const newUser = await (
      await authService.getLoggedInUser(data?.email)
    ).data.user;
    dispatch({ type: userConstants.USER_IS_FETCHED, user: newUser });
    navigate("/profile");
  };
  return (
    <>
      <div className="sidenav">
        <div className="profile">
          <img src={user?.img} alt="" width="100" height="100" />

          <div className="name">{user?.firstName + " " + user?.lastName}</div>
          <div className="job">{user?.profession}</div>
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
      <div className="main">
        <Box
          component="form"
          className="container"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={
                  firstName ? firstName : user?.firstName ? user?.firstName : ""
                }
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={
                  lastName ? lastName : user?.lastName ? user?.lastName : ""
                }
                autoComplete="family-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email ? email : user?.email ? user?.email : ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="relationship"
                label="Relationship"
                name="relationship"
                autoComplete="relationship"
                value={
                  relationship
                    ? relationship
                    : user?.relationship
                    ? user?.relationship
                    : ""
                }
                onChange={(e) => setRelationship(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="birthday"
                label="Birthday"
                name="birthday"
                autoComplete="birthday"
                value={
                  birthday ? birthday : user?.birthday ? user?.birthday : ""
                }
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                value={address ? address : user?.address ? user?.address : ""}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="language"
                label="language"
                name="language"
                autoComplete="language"
                value={
                  language ? language : user?.language ? user?.language : ""
                }
                onChange={(e) => setLanguage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="hobbies"
                label="Hobbies"
                name="hobbies"
                autoComplete="hobbies"
                value={hobbies ? hobbies : user?.hobbies ? user?.hobbies : ""}
                onChange={(e) => setHobbies(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="skills"
                label="Skills"
                name="skills"
                autoComplete="skills"
                value={skills ? skills : user?.skills ? user?.skills : ""}
                onChange={(e) => setSkills(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="img"
                label="Image URL"
                name="img"
                autoComplete="img"
                value={img ? img : user?.img ? user?.img : ""}
                onChange={(e) => setImg(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={
                  password ? password : user?.password ? user?.password : ""
                }
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Settings;
