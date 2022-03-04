import React, { useState, useEffect } from "react";
import "./Home.css";

import { Layout, Menu } from "antd";
import Post from "./../../components/Post/Post";
import authService from "./../../api/auth.service";
import { CircularProgress } from "@mui/material";

const { Content, Sider } = Layout;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchPosts() {
      const res = await authService.getPosts();
      if (res.data) {
        setPosts(res.data);
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <CircularProgress size={80} />
        </div>
      ) : (
        <div className="dashboardWrapper">
          <Layout style={{ height: "100%", paddingTop: "64px" }}>
            <Sider width={300} style={{ background: "#fff" }}>
              <Menu mode="inline" style={{ height: "100%" }}></Menu>
            </Sider>
            <Layout>
              <Content
                className="postsBlock"
                style={{
                  padding: 24,
                  margin: 0,
                  overflow: "auto",
                }}
              >
                {posts.map((post) => (
                  <Post key={post.id} data={post} />
                ))}
              </Content>
            </Layout>
            <Sider width={350} style={{ background: "#fff" }}>
              <Menu mode="inline" style={{ height: "100%" }}></Menu>
            </Sider>
          </Layout>
        </div>
      )}
    </>
  );
};

export default Home;
