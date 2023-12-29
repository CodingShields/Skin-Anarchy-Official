import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../fireBase/firebaseConfig";
import { v4 } from "uuid";

const AdminBlog = () => {
  const sections = ["1", "2", "3", "4"];
  const [state, setState] = useState({
    loading: false,
    uploading: false,
    error: null,
    errorMessage: "",
  });
  const [guestImage, setGuestImage] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [guestPicUrl, setGuestPicUrl] = useState(null);
  const [productPicUrl, setProductPicUrl] = useState(null);

  const [form, setForm] = useState({
    sections: 1,
    date: "",
    title: "",
    guest: "",
    guestBio: "",
    podcastUrl: "",
    contentTitle1: "",
    content1: "",
    contentTitle2: "",
    content2: "",
    contentTitle3: "",
    content3: "",
    contentTitle4: "",
    content4: "",
    contentTitle5: "",
    content5: "",
    contentTitle6: "",
    content6: "",
    contentTitle7: "",
    content7: "",
    contentTitle8: "",
    content8: "",
    contentTitle9: "",
    content9: "",
    contentTitle10: "",
    content10: "",
  });
  //Reset Page
  const initializeState = () => {
    setForm({
      sections: 1,
      date: "",
      title: "",
      guest: "",
      guestBio: "",
      podcastUrl: "",
      content1: "",
      content2: "",
      content3: "",
      content4: "",
    });
    setGuestImage([]);
    setProductImage([]);
    setGuestPicUrl("");
    setProductPicUrl("");
  };

  useEffect(() => {
    initializeState();
  }, []);

  // Onchange form handler
  const handleFormChange = (e) => {
    e.preventDefault();
    if (e.target.name === "sections") {
      setForm({ ...form, sections: e.target.value });
    } else if (e.target.name === "date") {
      setForm({ ...form, date: e.target.value });
    } else if (e.target.name === "title") {
      setForm({ ...form, title: e.target.value });
    } else if (e.target.name === "guest") {
      setForm({ ...form, guest: e.target.value });
    } else if (e.target.name === "guestBio") {
      setForm({ ...form, guestBio: e.target.value });
    } else if (e.target.name === "podcastUrl") {
      setForm({ ...form, podcastUrl: e.target.value });
    } else if (e.target.name === "content1") {
      setForm({ ...form, content1: e.target.value });
    } else if (e.target.name === "content2") {
      setForm({ ...form, content2: e.target.value });
    } else if (e.target.name === "content3") {
      setForm({ ...form, content3: e.target.value });
    } else if (e.target.name === "content4") {
      setForm({ ...form, content4: e.target.value });
    } else {
      return;
    }
  };

  const sectionNumbers = Array.from(
    { length: parseInt(form.sections, 10) },
    (_, index) => index + 1,
  );
  const formatDate = (date) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    const formattedDate = `${month}-${day}-${year}`;
    return formattedDate;
  };

  useEffect(() => {
    if (guestImage) {
      const guestImageUpload = async () => {
        const imgGuestRef = ref(
          storage,
          `blogImages/${guestImage[0].name + v4()}`,
        );
        try {
          await uploadBytes(imgGuestRef, guestImage[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              setGuestPicUrl(url);
              console.log(url);
            });
          });
        } catch (error) {
          console.error(error);
        }
      };
      guestImageUpload();
    } else {
      return;
    }
  }, [guestImage]);

  useEffect(() => {
    if (productImage) {
      const productImageUpload = async () => {
        const imgProductRef = ref(
          storage,
          `blogImages/${productImage[0].name + v4()}`,
        );
        try {
          await uploadBytes(imgProductRef, productImage[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              setProductPicUrl(url);
            });
          });
        } catch (error) {
          console.error(error);
        }
      };
      productImageUpload();
    } else {
      return;
    }
  }, [productImage]);

  const handleUpload = async () => {
    const date = formatDate(form.date);
    try {
      const colRef = collection(getFirestore(), "blogData");
      await addDoc(colRef, {
        date: date,
        title: form.title,
        guest: form.guest,
        guestBio: form.guestBio,
        podcastUrl: form.podcastUrl,
        contentOne: form.content1,
        contentTwo: form.content2,
        contentThree: form.content3,
        contentFour: form.content4,
        guestPic: guestPicUrl,
        productPic: productPicUrl,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-start justify-center w-full h-full ">
      <div className="flex flex-row items-center justify-center w-full h-48 my-8 ">
        <p className="text-4xl font-bold text-gray-700 bg-gray-400 border-4 w-fit py-8 px-48">
          Admin Blog
        </p>
      </div>
      <div className="flex grid gap-1 text-center font-bold items-center justify-center w-2/5 h-3/4 border-4 border-black overflow-y-scroll mx-auto px-12 pb-12">
        <p className="text-lg font-bold text-gray-700 border-4 w-fit py-8 px-24">
          Initial Upload Tool
        </p>
        <p className="text-lg font-bold text-gray-700 border-4 text-center w-auto py-4 px-12">
          How many sections?
        </p>
        <form>
          <select
            value={form.sections}
            name="sections"
            onChange={handleFormChange}
          >
            {sections.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <p>Data</p>
          <input
            value={form.date}
            name="date"
            onChange={handleFormChange}
            className=" border-4 text-end border-gray-700 rounded-lg h-24 w-auto shadow-lg px-6 py-2 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
            type="date"
          />
          <p>BlogTitle</p>
          <input
            value={form.title}
            name="title"
            onChange={handleFormChange}
            className="border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-auto hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
            type="text"
          />
          <p>Guest</p>
          <input
            value={form.guest}
            name="guest"
            onChange={handleFormChange}
            className="border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-auto hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
            type="text"
          />
          <p>Guest Bio</p>
          <input
            value={form.guestBio}
            name="guestBio"
            onChange={handleFormChange}
            className="border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-auto hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
            type="text"
          />
          <p>Podcast Url</p>
          <input
            value={form.podcastUrl}
            name="podcastUrl"
            onChange={handleFormChange}
            className="border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-auto hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
            type="text"
          />

          <p>Title Image</p>
          <div>
            <input
              onChange={(e) => setGuestImage(e.target.files)}
              className="w-auto h-16  border-4 border-gray-700 rounded-lg font-normal shadow-lg py-4 px-8 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
              type="file"
            />
            {guestImage.length > 0 && <p>Selected File: {guestImage.name}</p>}
          </div>
          <p> Product Image</p>
          <div>
            <input
              onChange={(e) => setProductImage(e.target.files)}
              className="w-auto h-16  border-4 border-gray-700 rounded-lg font-normal shadow-lg py-4 px-8 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
              type="file"
            />
            {productImage.length > 0 && (
              <p>Selected File: {productImage.name}</p>
            )}
          </div>

          {/* Map over sectionNumbers to render sections */}
          {sectionNumbers.map((sectionNumber, index) => (
            <div
              className="flex flex-col items-center justify-center w-full h-full "
              key={index}
            >
              <p>Content Title {sectionNumber}</p>
              <input
                onChange={handleFormChange}
                value={form.contentTitle}
                name={`contentTitle${sectionNumber}`}
                className="w-full h-16 border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-1/4 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
                type="text"
              />
              <p>Section {sectionNumber}</p>
              <textarea
                onChange={handleFormChange}
                value={form.content}
                name={`content${sectionNumber}`}
                className="w-full h-48
						border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 w-1/4 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl
						"
                type="text"
              />
            </div>
          ))}
        </form>
      </div>

      <div className="flex flex-row items-center justify-center w-full h-48 my-2">
        <button
          onClick={handleUpload}
          className="bg-gray-400 border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 my-4 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AdminBlog;
