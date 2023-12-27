import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import blackMarble from "../../assets/images/blackMarble.jpeg";
import SearchBar from "../components/searchBar";
import tealTypewriter from "../../assets/images/tealTypewriter.jpeg";
import BlogKeys from "../../assets/images/blogKeys.jpeg";
import blogBG from "../../assets/images/blogBG.jpeg";
import blogKeys from "../../assets/images/blogKeys.jpeg";
import PrevBlogs from "./comp/prevBlogs";

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-fit flex flex-row  bg-gray-300 text-center mt-40">
        <div className="w-1/2 h-fit ">
          <button>CTA Subscribe</button>
        </div>
        <div className="w-1/2 h-fit right-0 bg-gray-300 text-center">
          <p className="text-4xl font-bold text-gray-700">Skinanarchy Blog </p>
        </div>
        <div className="w-1/2 h-fit ">social media icons</div>
      </div>
      <div className="w-full h-fit text-center">
        topics bar
        <button
          className="bg-gray-400 border-4 border-gray-700 rounded-lg shadow-lg px-6 py-2 my-4 hover:bg-gray-300 hover:border-gray-600 hover:shadow-xl"
          onClick={() => navigate("/MembersArea/PrevBlogs")}
        ></button>
      </div>
      <div className="w-full h-fit  text-center">scrolling marquee</div>
      <div className="w-full h-fit text-center">possible ad content</div>
      <div className="w-full h-fit flex flex-col  text-center">
        {" "}
        <p className="w-full text-center">main blog content area</p>
        <div className="w-full h-fit flex flex-row">
          <div className="w-full h-fit text-center flex flex-col  place-items-center space-y-16">
            <div>
              <img src={blogKeys} className="h-32" alt="blogKeys" />
              <p>title</p>
              <p>description</p>
            </div>
            <div>
              <img src={blogKeys} className="h-32" alt="blogKeys" />
              <p>title</p>
              <p>description</p>
            </div>
          </div>
          <div className="w-full h-fit text-center flex flex-col  place-items-center space-y-16">
            <div>
              <img src={blogKeys} className="h-72" alt="blogKeys" />
              <p>title</p>
              <p>description</p>
            </div>
          </div>
          <div className="w-full h-fit  text-center flex flex-col  place-items-center space-y-16">
            <div>
              <img src={blogKeys} className="h-32" alt="blogKeys" />
              <p>title</p>
              <p>description</p>
            </div>
            <div>
              <img src={blogKeys} className="h-32" alt="blogKeys" />
              <p>title</p>
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col  text-center">
        section 2
        <div className="w-full h-fit flex flex-row">
          <div className="w-3/4 h-fit flex flex-col">big left</div>
          <div className="w-1/4 h-fit flex flex-col">
            smaller right
            <div>section</div>
            <div>section</div>
          </div>
        </div>
      </div>
      <div>
        big section
        <div className="w-full h-fit flex flex-row">
          <div>section md</div>
          <div>section lg</div>
          <div>section md</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
