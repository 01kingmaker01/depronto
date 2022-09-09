import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogCon = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        " http://jsonplaceholder.typicode.com/posts/?_limit=10"
      ).then((response) => response.json());

      console.log({ data });
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <div
      id="blogs"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}>
      {blogs?.map((data) => (
        <BlogCard
          key={data.id}
          {...{
            data,
            img: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
          }}
        />
      ))}
    </div>
  );
};

export default BlogCon;
