import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

export default function Blogs({handleAddToBookmarks, handleMarkAsRead}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {
         blogs.map(blog => <Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks} key={blog.id} blog={blog}></Blog>)
      }
    </div>
  );
}
handleAddToBookmarks: PropTypes.func
handleMarkAsRead: PropTypes.func
