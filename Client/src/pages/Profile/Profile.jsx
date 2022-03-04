import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import Layout, { Content } from "antd/lib/layout/layout";
import Post from "../../components/Post/Post";
import SocialFollow from "./Socialfollow";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = () => {
  const user = useSelector((state) => state);
  const [posts, setPosts] = useState(user?.users?.user?.posts);
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
        <Layout>
          <Content
            className="postsBlock"
            style={{
              padding: 24,
              margin: 0,
              overflow: "auto",
            }}
          >
            {posts?.map((post) => (
              <Post key={post.id} data={post} />
            ))}
          </Content>
        </Layout>

        <h2>SOCIAL MEDIA</h2>
        <div>
          <SocialFollow />
        </div>
      </div>
    </>
  );
};

export default Profile;
