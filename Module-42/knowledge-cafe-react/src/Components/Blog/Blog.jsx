import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";

export default function Blog({ blog,handleAddToBookmarks,handleMarkAsRead }) {
  console.log(blog);
  const { title, cover, author, author_img, reading_time, posted_date,hashtags } = blog;
  return (
    <div className="mb-20 mt-10">
      <img className="w-full rounded-xl mb-8" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img className="w-14 h-14 rounded-full " src={author_img} alt="" />
          <div>
            <h3 className="font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div >
          <span className="font-semibold">{reading_time} min read
            <button onClick={()=>handleAddToBookmarks(blog)} className="ml-2  text-red-600"><FaBookmark /></button>
          </span>
        </div>
      </div>
      <h3 className="text-3xl mt-5"> {title}</h3>
      <p className="mt-3">
        {
         hashtags.map((hash, idx) => <span key={idx}> <a href=""> {hash} </a> </span>)
        }
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)} className="text-purple-400 underline font-bold mt-5">Mark As Read</button>
    </div>
  );
}

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};
