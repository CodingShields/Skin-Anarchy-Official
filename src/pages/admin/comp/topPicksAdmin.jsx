import { useEffect, useState } from "react";
import { TopPicksCategoriesArray } from "../../../assets/data/topPicks/topPicksCategoriesArray";

const TopPicksAdmin = () => {
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
    success: false,
    successMessage: "",
  });
  const [prevTopPicksData, setPrevTopPicksData] = useState([
    {
      year: "",
      category: "",
    },
  ]);
  const [newTopPicksData, setNewTopPicksData] = useState([
    {
      uploadDate: "",
      year: "",
      category: "",
      product: "",
      brand: "",
      link: "",
    },
  ]);

  const yearList = () => {
    const year = new Date().getFullYear();
    const years = [];
    for (let i = 2010; i <= year; i++) {
      years.push(i);
    }
    return years.map((year, index) => {
      return <option key={index}>{year}</option>;
    });
  };

  const handlePrevOnchange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    console.log(name);
    setPrevTopPicksData((prevState) => ({
      ...prevState[0],
      [name]: value,
    }));
  };

  useEffect(() => { 
    setPrevTopPicksData({
      year: "",
      category: "",
    }),
      setNewTopPicksData({
        uploadDate: "",
        year: "",
        category: "",
        product: "",
        brand: "",
        link: "",
      });
  }, []);
    
  console.log(prevTopPicksData);
  return (
    <div className="flex flex-col items-center justify-start w-fit h-full mt-20 ">
      <h1 className="text-5xl font-bold text-black w-fit text-center mr-2 mb-4 ">
        Top Picks
      </h1>
      <div className="flex flex-row items-center justify-start w-fit h-fit space-x-48">
        <div className="flex flex-col items-center justify-start w-11/12 h-full space-y-6 py-6 px-6 bg-white shadow-lg shadow-black rounded-md hover:bg-gray-400 group">
          <h1 className="text-2xl font-bold text-black w-fit text-center mr-2 border-b-2 border-black group-hover:text-white group-hover:border-white">
            Previous Top Picks
          </h1>
          <div className="flex flex-row items-center justify-between w-96 h-full mt-2">
            <h1 className="text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white">
              What year?
            </h1>
            <select
              name="year"
         
              value={prevTopPicksData.year}
              onChange={handlePrevOnchange}
              className="w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center "
            >
              {yearList()}
            </select>
          </div>
          <div className="flex flex-row items-center justify-between w-96 h-full mt-2">
            <h1 className="text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white">
              Category?
            </h1>
            <select
              value={prevTopPicksData.category}
              onChange={handlePrevOnchange}
              name="category"
              className="w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center"
            >
              {TopPicksCategoriesArray.map((category, index) => {
                return <option key={index}>{category}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-11/12 h-full space-y-6 py-6 px-6 bg-white shadow-lg shadow-black rounded-md hover:bg-gray-400 group">
          <h1 className="text-2xl font-bold text-black w-fit text-center mr-2 border-b-2 border-black group-hover:text-white group-hover:border-white">
            Upload New Top Picks
          </h1>
          <div className="flex flex-row items-center justify-between w-96 h-full mt-4">
            <h1 className="text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white">
              Upload Date:
            </h1>
            <input
              className="w-48 text-center hover:font-bold hover:ring-4 hover:ring-blue-500"
              type="date"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-96 h-full">
            <h1 className="text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white">
              Year:
            </h1>
            <select className="w-48 text-center hover:font-bold hover:ring-4 hover:ring-blue-500">
              {yearList()}
            </select>
          </div>
          <div className="flex flex-row items-center justify-between w-96 h-full">
            <h1 className="text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white">
              Category:
            </h1>
            <select className="w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center">
              {TopPicksCategoriesArray.map((category, index) => {
                return <option key={index}>{category}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicksAdmin;
