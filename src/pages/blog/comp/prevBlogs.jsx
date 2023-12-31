import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const PrevBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [sort, setSort] = useState("");
  const [state, setState] = useState({
    loading: false,
    error: null,
    errorMessage: "",
  });

  useEffect(() => {
    setState({
      loading: true,
      error: true,
      errorMessage: "Loading Previous Blogs",
    });
    const fetchData = async () => {
      const db = getFirestore();
      await getDocs(collection(db, "blogData")).then((snapshot) => {
        const blogs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(blogs);
        setBlogs(blogs);
        setState({ loading: false, error: false, errorMessage: "" });
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (sort === "Most Recent") {
      setBlogs(blogs.sort((a, b) => b.date - a.date));
    } else if (sort === "Oldest") {
      setBlogs(blogs.sort((a, b) => a.date - b.date));
    }
  }, [sort]);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-white">
      <div className="flex flex-row w-full h-16 mt-40 justify-center items-center space-x-4">
        <h1>Previous Blogs</h1>
        <select
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          className="w-fit h-fit rounded-lg border-2 border-gray-400"
        >
          <option>Sort By</option>
          <option>Most Recent</option>
          <option>Oldest</option>
        </select>
      </div>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h1>{blog.title}</h1>
          <h2>{blog.date}</h2>
          <h3>{blog.guestBio}</h3>
          <p>{blog.description}</p>
          {blog.images.map((imageUrl, imageIndex) => (
            <img
              key={imageIndex}
              className="w-fit h-32"
              src={imageUrl}
              alt={`Image ${imageIndex + 1}`} // Add alt text for accessibility
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrevBlogs;
