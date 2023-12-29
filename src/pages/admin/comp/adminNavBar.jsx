import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUturnLeftIcon,
  BookOpenIcon,
  ChartBarSquareIcon,
  HomeIcon,
  UsersIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

const AdminNavBar = ({ onItemClicked }) => {
  const navigation = [
    {
      name: "Dashboard",
      icon: HomeIcon,
      helperMessage: "Skinanarchy Overview",
    },
    {
      name: "Stats",
      icon: ChartBarSquareIcon,
      helperMessage: "Check Current Podcast Stats",
    },
    { name: "Blog", icon: BookOpenIcon, helperMessage: "Update Blog" },
    {
      name: "News Letter",
      icon: NewspaperIcon,
      helperMessage: "Send Weekly NewsLetter",
    },
    {
      name: "Members",
      icon: UsersIcon,
      helperMessage: "Manage Users",
    },
    {
      name: "Website",
      icon: ArrowUturnLeftIcon,
      helperMessage: "Return To WebSite",
    },
  ];
  const handleItemClick = (itemName) => {
    if (onItemClicked) {
      onItemClicked(itemName);
    }
  };
  return (
    <div className="flex flex-col bg-gray-700 items-start justify-start w-min h-full drop-shadow-2xl	shadow-2xl shadow-black">
      <div className="flex flex-col items-start justify-start  h-full w-full  px-4 ">
        {navigation.map((item, index) => {
          return (
            <div
              onClick={() => handleItemClick(item.name)}
              className="flex flex-row items-center justify-start w-full h-16 my-8 space-x-4 px-4 rounded-lg hover:bg-gray-600 hover:cursor-pointer hover:shadow-blue-200 hover:shadow-md hover:drop-shadow-xl"
              key={index}
              value={item.name}
            >
              {" "}
              <item.icon className="w-8 h-8 text-gray-200" />
              <p className="text-white text-xl font-bold w-32">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminNavBar;
