import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import AddCircleBtn from "../../components/buttons/addCircleBtn";
import MinusCircleBtn from "../../components/buttons/minusCircleBtn";
import CommitBtn from "../../components/buttons/commitBtn";

const AdminBlog = () => {
  const [state, setState] = useState({
    loading: false,
    uploading: false,
    error: null,
    errorMessage: "",
    commitClicked: false,
  });

  const [blogData, setBlogData] = useState({
    date: "",
    title: "",
    podcastUrl: "",
    tags: "",
    images: [],
    content: [],
  });
  const [contentTitle, setContentTitle] = useState("");
  const [content, setContent] = useState("");

  //Image Input States
  const [imageInputs, setImageInputs] = useState([1]);
  const [contentInputs, setContentInputs] = useState([1]);
  const [imageUrls, setImageUrls] = useState([]);
  
  const initializeState = () => {
    setImageInputs([1]);
    setContentInputs([1]);
    setBlogData({
      date: "",
      title: "",
      podcastUrl: "",
      tags: "",
      images: [],
      content: [],
    });
    setContentTitle("");
    setContent("");
    setImageUrls([]);
  };

  useEffect(() => {
    initializeState();
  }, []);

  const formatDate = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    const formattedDate = `${month}-${day}-${year}`;
    return formattedDate;
  };

  useEffect(() => {
    const handleUpload = async () => {
      try {
        const urls = [];

        for (let i = 0; i < blogData.images.length; i++) {
          const image = blogData.images[i].image;
          const imageRef = ref(storage, `blogImages/${image.name + v4()}`);

          await uploadBytes(imageRef, image).then((snapshot) => {
            return getDownloadURL(snapshot.ref).then((url) => {
              urls.push(url);
            });
          });
        }

        setImageUrls(urls);
      } catch (error) {
        console.error(error);
      }
    };

    handleUpload();
  }, [blogData.images]);

  const handleUpload = async () => {
    try {
      const colRef = collection(getFirestore(), "blogData");
      await addDoc(colRef, {
        date: blogData.date,
        title: blogData.title,
        podcastUrl: blogData.podcastUrl,
        tags: blogData.tags,
        images: [...imageUrls, imageUrls[0]],
        content: blogData.content,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleTitleContentInputs = () => {
    const newContentInputs = [...contentInputs, contentInputs.length + 1]; // Add a new input
    setContentInputs(newContentInputs);
  };

  const onClick = () => {
    setBlogData({
      ...blogData,
      content: [
        ...blogData.content,
        {
          title: contentTitle,
          content: content,
        },
      ],
    });
  };

  const handleTitleContentInputsRemove = () => {
    const newContentInputs = [...contentInputs];
    if (contentInputs <= 1) {
    } else {
      newContentInputs.pop();
      setContentInputs(newContentInputs);
    }
  };
  const handleImageInputAdd = () => {
    const newImageInputs = [...imageInputs, imageInputs.length + 1]; // Add a new input
    setImageInputs(newImageInputs);
  };
  const handleImageInputRemove = () => {
    const newImageInputs = [...imageInputs];
    if (imageInputs <= 1) {
    } else {
      newImageInputs.pop(); // Remove the last input
      setImageInputs(newImageInputs);
    }
  };
  // On Change Functions
  const handleImageUploadOnchange = (e) => {
    const newImage = e.target.files[0];
    const imageLocation = e.target.name;
    const imageUrl = URL.createObjectURL(newImage);
    console.log(newImage);
    setBlogData({
      ...blogData,
      images: [
        ...blogData.images,
        { imageLocation: imageLocation, imageUrl: imageUrl, image: newImage },
      ],
    });
  };

  const errorReset = () => {
    setTimeout(() => {
      setState({ error: false, errorMessage: "" });
    }, 3000);
  };

  const handleDateChange = (e) => {
    const date = formatDate(e.target.value);
    setBlogData({ ...blogData, date: date });
  };

  // const handleCommit = (value) => {
  //   if (value === "main") {
  //     setState({ ...state, commitMain: true });
  //   } else if (value === "images") {
  //     setState({ ...state, commitImages: true });
  //   } else if (value === "content") {
  //     setState({ ...state, commitContent: true });
  //   } else {
  //     return;
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-col items-center justify-center w-full h-36">
        <p className="text-4xl font-bold text-black w-full py-8 text-center">
          Admin Blog Upload and Update Tool
        </p>
      </div>
      {/* Main Container */}
      <div className="flex flex-row items-start justify-between w-11/12 h-224 shadow-black shadow-2xl bg-zinc-600 rounded-2xl">
        {/* Left Container Under Main */}
        <div className="flex flex-col items-center justify-start w-11/12 h-176 space-y-4 pb-12 hover:bg-gray-500 bg-gray-600 border-r-2 border-white rounded-l-2xl">
          <p className="text-3xl text-white font-bold w-11/12 h-fit text-center py-8 border-b-2 border-white ">
            Main Blog Data
          </p>
          <div className="flex flex-row items-center justify-center w-full h-fit ">
            <div className="flex flex-col items-center justify-center w-full h-24 space-y-4 ">
              <p className="text-2xl text-white font-bold w-3/4 h-fit text-center ">
                BlogPost Date
              </p>
              <input
                onChange={handleDateChange}
                className="w-3/4 h-20 focus:outline-4 focus:outline-blue-500 text-lg text-center"
                type="date"
                name="date"
                id="date"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-fit space-y-4 ">
              <p className="text-2xl text-white font-bold text-center w-3/4 h-fit">
                Blog Post Title
              </p>
              <textarea
                onChange={(e) =>
                  setBlogData({ ...blogData, title: e.target.value })
                }
                className="w-3/4 h-12 focus:outline-4 focus:outline-blue-500 text-lg text-center"
                type="text"
                name="title"
                id="title"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-11/12 h- mt-2 bg-zinc-300 text-start shadow-lg shadow-black overscroll-y-auto overflow-y-scroll grow-0">
            <p className="text-2xl text-black font-bold w-11/12 border-b-2 border-black text-center mt-4 pt-4">
              Blog Title Image
            </p>
            <div className="flex flex-col items-center justify-center w-full h-full mb-4">
              {blogData.images.length > 0 && (
                <img
                  src={blogData.images[0].imageUrl}
                  className="w-fit h-64 py-4 px-2"
                />
              )}
              <input
                onChange={handleImageUploadOnchange}
                className="w-full h-fit focus:outline-4 focus:outline-blue-500 pl-10 text-lg text-center"
                type="file"
                name="titleImage"
                id="titleImage"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full h-fit mb-4 ">
              <p className="text-2xl text-black font-bold w-11/12 border-t-2 border-black text-center mt-4 pt-4">
                Add #tags for data user searches
              </p>
              <p className="text-lg text-gray-600 font-italic w-11/12 text-center mt-2 pt-2">
                Separate each tag with a comma
              </p>
              <p className="text-lg text-gray-600 font-italic w-11/12 text-center pt-2">
                Example: #guestName, #product, #topic etc...
              </p>
              <input
                onChange={(e) =>
                  setBlogData({ ...blogData, tags: e.target.value })
                }
                className="w-11/12 h-18 focus:outline-4 focus:outline-blue-500 text-lg text-center"
                type="text"
                name="tags"
                id="tags"
              />
            </div>
            <div>
              <p className="text-2xl text-black font-bold w-11/12 border-t-2 border-black text-center w-full mt-4 pt-4">
                Podcast URL
              </p>
              <input
                onChange={(e) =>
                  setBlogData({
                    ...blogData,
                    podcastUrl: e.target.value,
                  })
                }
                className="w-96 h-fit focus:outline-4 focus:outline-blue-500 text-lg text-center mb-4"
                type="text"
                name="podcastUrl"
                id="podcastUrl"
              />
            </div>
            {/* <CommitBtn
              value="main"
              onClick={() => handleCommit("main")} // Pass the desired value here
            /> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-176 hover:bg-zinc-500 bg-gray-600 grow-0">
          {/* Middle Container */}
          <p className="text-2xl font-bold text-gray-100 w-11/12 py-8 text-center border-b-2 border-white mb-4 ">
            Add Additional Image Uploads
          </p>
          <div className="flex flex-row items-center justify-center w-full h-fit mb-2 space-x-4">
            <AddCircleBtn onClick={handleImageInputAdd} />
            <p className="text-xl text-white font-bold w-fit">Add </p>
            <MinusCircleBtn onClick={handleImageInputRemove} />
            <p className="text-xl  text-white font-bold w-fit">Remove </p>
          </div>
          <div className="flex flex-col items-center justify-start w-full h-full mb-4 overscroll-y-auto overflow-y-scroll grow-0">
            {imageInputs.length >= 1 ? (
              <div className="flex flex-col items-center justify-center w-full  h-fit px-4  grow-0">
                {imageInputs.map((inputNumber, index) => (
                  <div
                    key={inputNumber}
                    className="flex flex-col items-center justify-start w-full h-full mt-2 bg-zinc-300 pb-4 text-start shadow-lg shadow-black"
                  >
                    <p className="text-2xl font-bold text-black w-11/12 text-center pt-6 border-b-2 border-black">
                      Extra Image {inputNumber}
                    </p>
                    {blogData.images[index + 1] && (
                      <img
                        src={blogData.images[index + 1].imageUrl}
                        className="w-fit h-fit py-6 px-6"
                      />
                    )}
                    <div className="flex flex-col items-center justify-end w-full h-full">
                      <input
                        onChange={handleImageUploadOnchange}
                        className="w-112 h-fit focus:outline-4 focus:outline-blue-500 pl-10 text-lg text-center"
                        type="file"
                        name={`image${inputNumber}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full h-176 hover:bg-zinc-500 bg-gray-600 border-l-2 border-white rounded-r-2xl">
          {/* Right Container */}
          <p className="text-2xl font-bold text-gray-100 text-center w-11/12 py-8 border-b-2 border-white mb-4">
            Add Titles and Contents
          </p>
          <div className="flex flex-row items-center justify-center w-full h-fit mb-4 space-x-4 ">
            <AddCircleBtn
              onClick={handleTitleContentInputs}
            />
            <p className="text-xl  text-white font-bold w-fit ">Add</p>
            <MinusCircleBtn onClick={handleTitleContentInputsRemove} />

            <p className="text-xl  text-white font-bold w-fit">Remove</p>
          </div>
          <div className="flex flex-col  w-full h-full mb-4 overscroll-y-auto overflow-y-scroll grow-0">
            {contentInputs.length >= 1 ? (
              <div className="flex flex-col  w-full h-fit  px-4">
                {contentInputs.map((inputNumber) => (
                  <div
                    key={inputNumber}
                    className="flex flex-col items-center justify-center w-full h-fit mb-8 space-y-2 border-2 bg-zinc-300 border-zinc-900 pb-4 text-start shadow-lg shadow-black"
                  >
                    <p className="text-2xl font-bold text-black text-center w-full py-4 px-48">
                      Content Title {inputNumber}
                    </p>
                    <input
                      onChange={(e) => setContentTitle(e.target.value)}
                      className="w-11/12 h-18 focus:outline-4 focus:outline-blue-500 shadow-md shadow-black"
                      type="text"
                      name={`contentTitle${inputNumber}`}
                    />
                    <p className="text-2xl font-bold text-black text-center w-full py-4 px-48 ">
                      Content {inputNumber}
                    </p>
                    <textarea
                      onChange={(e) => setContent(e.target.value)}
                      className="w-11/12 h-24 focus:outline-4 focus:outline-blue-500 shadow-md shadow-black"
                      type="text"
                      name={`content${inputNumber}`}
                    />
                    <CommitBtn onClick={onClick} />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-fit my-8 space-y-2 overflow-y-none">
        <div className="flex flex-row items-center justify-center w-full h-12 my-2">
          <button
            onClick={handleUpload}
            className=" border-4 border-gray-700 rounded-lg text-xl shadow-lg shadow-black text-white font-bold px-8 py-4 my-4 hover:bg-zinc-500 bg-gray-600 hover:shadow-blue-400"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
