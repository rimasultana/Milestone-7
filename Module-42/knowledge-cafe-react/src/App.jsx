import "./index.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Boolmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

const handleMarkAsRead=(time)=>{
  setReadingTime(readingTime + time)

}

  const handleAddToBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-10">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
