import "./index.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Boolmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
const handleAddToBookmarks = blog=>{
  setBookmarks([...bookmarks, blog]);
}

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-10">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
