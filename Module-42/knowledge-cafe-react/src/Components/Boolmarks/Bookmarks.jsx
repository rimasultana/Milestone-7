import PropTypes from "prop-types";

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 ml-10 mt-20">
      <div className="bg-purple-300 border-purple-600 border-2 py-5 text-center rounded-lg mb-5">
        <h3 className="text-3xl ">Spent time on read: {readingTime}</h3>
      </div>
      <div className="bg-gray-200 rounded-lg">
        <h2 className="text-2xl text-center">
          Bookmarks Blogs: {bookmarks.length}{" "}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
