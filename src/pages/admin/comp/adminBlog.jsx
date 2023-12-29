import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import AddCircleBtn from "../../components/buttons/addCircleBtn";
import MinusCircleBtn from "../../components/buttons/minusCircleBtn";
import SaveBtn from "../../components/buttons/saveBtn";
const AdminBlog = () => {
  const [state, setState] = useState({
    loading: false,
    uploading: false,
    error: null,
    errorMessage: "",
  });

  const [saveBtnClicked, setSaveBtnClicked] = useState(false);

  const [guestImage, setGuestImage] = useState([]);
  const [guestPicUrl, setGuestPicUrl] = useState(null);

  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploadedContent, setUploadedContent] = useState({});

  const [imageInputs, setImageInputs] = useState([1]);
  const [contentInputs, setContentInputs] = useState([1]);

  const formatDate = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    const formattedDate = `${month}-${day}-${year}`;
    return formattedDate;
  };

  // useEffect(() => {
  //   if (guestImage) {
  //     const guestImageUpload = async () => {
  //       const imgGuestRef = ref(
  //         storage,
  //         `blogImages/${guestImage[0].name + v4()}`,
  //       );
  //       try {
  //         await uploadBytes(imgGuestRef, guestImage[0]).then((snapshot) => {
  //           getDownloadURL(snapshot.ref).then((url) => {
  //             setGuestPicUrl(url);
  //             console.log(url);
  //           });
  //         });
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     guestImageUpload();
  //   } else {
  //     return;
  //   }
  // }, [guestImage]);

  //   const handleUpload = async () => {
  //     const date = formatDate(form.date);
  //     try {
  //       const colRef = collection(getFirestore(), "blogData");
  //       await addDoc(colRef, {
  //         date: date,
  //         title: form.title,
  //         guest: form.guest,
  //         guestBio: form.guestBio,
  //         podcastUrl: form.podcastUrl,
  //         contentOne: form.content1,
  //         contentTwo: form.content2,
  //         contentThree: form.content3,
  //         contentFour: form.content4,
  //         guestPic: guestPicUrl,
  //         productPic: productPicUrl,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const handleTitleContentInputs = () => {
    const newContentInputs = [...contentInputs, contentInputs.length + 1]; // Add a new input
    setContentInputs(newContentInputs);
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

  const initializeState = () => {
    setImageInputs([1]);
    setContentInputs([1]);
  };

  useEffect(() => {
    initializeState();
  }, []);

  const handleImageUploadOnchange = (e) => {
    const newImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(newImage);
    setUploadedImages((prevImages) => [...prevImages, imageUrl]);
  };

  const handleSave = () => {

    setSaveBtnClicked(!saveBtnClicked);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full grow">
      <div className="flex flex-col items-center justify-center w-full h-36">
        <p className="text-4xl font-bold text-black  border-4 w-full py-8 text-center">
          Admin Blog Upload and Update Tool
        </p>
      </div>
      {/* Main Container */}
      <div className="flex flex-row items-start justify-between w-11/12 h-208 border-2 border-black shadow-black shadow-xl bg-zinc-600 grow-0">
        {/* Left Container Under Main */}
        <div className="flex flex-col items-center justify-start w-11/12 h-full space-y-4 pb-12 hover:bg-gray-500 bg-gray-600 border-r-2 border-white hover:outline-none">
          <p className="text-3xl text-white font-bold w-11/12 h-fit text-center py-8 border-b-2 border-white ">
            Main Blog Data
          </p>
          <div className="flex flex-row items-center justify-center w-full h-fit ">
            <div className="flex flex-col items-center justify-center w-full h-24 ">
              <p className="text-2xl text-white font-bold w-3/4 h-fit text-center ">
                BlogPost Date
              </p>{" "}
              <input
                className="w-3/4 h-18 focus:outline-4 focus:outline-blue-500 text-lg text-center"
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
                className="w-3/4 h-18 focus:outline-4 focus:outline-blue-500 text-lg text-center"
                type="text"
                name="title"
                id="title"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-11/12 h-full mt-2 bg-zinc-300 text-start shadow-md shadow-black">
            <p className="text-2xl text-black font-bold w-11/12 border-b-2 border-black text-center mt-4 pt-4">
              Blog Title Image
            </p>
            <div className="flex flex-col items-center justify-center w-full h-full mb-4">
              {uploadedImages.length > 0 && (
                <img
                  src={uploadedImages[0]}
                  className="w-fit h-fit py-4 px-2"
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
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full hover:bg-zinc-500 bg-gray-600 ">
          {/* Middle Container */}
          <p className="text-2xl font-bold text-gray-100 w-11/12 py-8 text-center border-b-2 border-white mb-4">
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
              <div className="flex flex-col items-center justify-center w-full  h-fit px-4  ">
                {imageInputs.map((inputNumber, index) => (
                  <div
                    key={inputNumber}
                    className="flex flex-col items-center justify-start w-full h-full mt-2 bg-zinc-300 pb-4 text-start shadow-md shadow-black"
                  >
                    <p className="text-2xl font-bold text-black w-11/12 text-center pt-6 border-b-2 border-black">
                      Extra Image {inputNumber}
                    </p>
                    <img
                      src={uploadedImages[index + 1]}
                      className="w-fit h-fit py-2 px-2"
                    />
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
        <div className="flex flex-col items-center justify-start w-full h-full hover:bg-zinc-500 bg-gray-600 border-l-2 border-white ">
          {/* Right Container */}
          <p className="text-2xl font-bold text-gray-100 text-center w-11/12 py-8 border-b-2 border-white mb-4">
            Add Titles and Contents
          </p>
          <div className="flex flex-row items-center justify-center w-full h-fit mb-4 space-x-4 ">
            <AddCircleBtn
              disabled={saveBtnClicked ? true : false}
              onClick={handleTitleContentInputs} />
            <p className="text-xl  text-white font-bold w-fit ">Add</p>
            <MinusCircleBtn onClick={handleTitleContentInputsRemove} />

            <p className="text-xl  text-white font-bold w-fit">Remove</p>
          </div>
          <div className="flex flex-col  w-full h-full mb-4 overscroll-y-auto overflow-y-scroll grow-0">
            {contentInputs.length >= 1 ? (
              <div className="flex flex-col  w-full h-fit  px-4  border-zinc-300">
                {contentInputs.map((inputNumber) => (
                  <div
                    key={inputNumber}
                    className="flex flex-col items-center justify-center w-full h-fit mb-8 space-y-2 border-2 bg-zinc-300 border-zinc-900 pb-4 text-start shadow-md shadow-black"
                  >
                    <p className="text-2xl font-bold text-black text-center w-full py-4 px-48">
                      Content Title {inputNumber}
                    </p>
                    <input
                      className="w-11/12 h-18 focus:outline-4 focus:outline-blue-500 shadow-md shadow-black"
                      type="text"
                      name={`contentTitle${inputNumber}`}
                    />
                    <p className="text-2xl font-bold text-black text-center w-full py-4 px-48 ">
                      Content {inputNumber}
                    </p>
                    <textarea
                      className="w-11/12 h-24 focus:outline-4 focus:outline-blue-500 shadow-md shadow-black"
                      type="text"
                      name={`content${inputNumber}`}
                    />
                    <SaveBtn onClick={handleSave} />
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
        <div className="flex flex-row items-center justify-center w-full h-24 my-2">
          <button
            //   onClick={handleUpload}
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
