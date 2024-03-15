import React from "react";
// import BlogEditor from "./WriteBlogs";
import styled from "styled-components";

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BlogItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }
`;

function BlogsPage() {
  // Sample hardcoded blogs
  const blogs = [
    {
      _id: 1,
      title: "Sample Blog 1",
      body: "<p>This is the body of the sample blog 1.</p>",
    },
    {
      _id: 2,
      title: "Sample Blog 2",
      body: "<p>This is the body of the sample blog 2.</p>",
    },
  ];

  return (
    <div>
      <BlogContainer>
        <center>
          <br></br>
          <h1 style={{ fontSize: 30, textAlign: "center" }}>
            <b>Blogs</b>
          </h1>
          <br></br>
        </center>
        {blogs.map((blog) => (
          <BlogItem key={blog._id}>
            <h3 style={{ fontSize: 25, textAlign: "center" }}>{blog.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
            {/* Rest of your code */}
          </BlogItem>
        ))}
      </BlogContainer>
    </div>
  );
}

export default BlogsPage;
