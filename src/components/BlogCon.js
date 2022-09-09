import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";

const BlogCon = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        " http://jsonplaceholder.typicode.com/posts/?_limit=3"
      ).then((response) => response.json());

      console.log({ data });
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <Row>
      {blogs?.map((data) => (
        <Col sm="2" md="4">
          <BlogCard key={data.id} data={data} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogCon;
