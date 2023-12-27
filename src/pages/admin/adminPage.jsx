import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  BellIcon,
  BookOpenIcon,
  ChevronDoubleDownIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  GlobeAltIcon,
  ChartBarSquareIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ChartBarIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import AdminDashboard from "../admin/comp/adminDashboard";
import AdminNewsLetter from "../admin/comp/adminNewsLetter";
import AdminBlog from "../admin/comp/adminBlog";
import AdminStats from "../admin/comp/adminStats";
import AdminUserManagement from "../admin/comp/adminUserManagement";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, helperMessage: "Skinanarchy Overview" },
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
    name: "User Management",
    icon: UsersIcon,
    helperMessage: "Manage Users",
  },
  {
    name: "Return To Website",
    icon: ArrowUturnLeftIcon,
    helperMessage: "Return To WebSite",
  },
];

const AdminPage = () => {
  const [renderStep, setRenderStep] = useState("");

  const navigate = useNavigate();

  const handleNavigation = (name) => {
    const navTarget = name;
    if (navTarget === "Return To Website") {
      navigate("/MembersArea/Home");
    } else if (navTarget === "Dashboard") {
      setRenderStep(<AdminDashboard />);
    } else if (navTarget === "Stats") {
      setRenderStep(<AdminStats />);
    } else if (navTarget === "Blog") {
      setRenderStep(<AdminBlog />);
    } else if (navTarget === "News Letter") {
      setRenderStep(<AdminNewsLetter />);
    } else if (navTarget === "User Management") {
      setRenderStep(<AdminUserManagement />);
    }
    else {
      return;
    }
  };
  return (
    <div className="flex flex-row h-full w-full bg-gray-700">
      <div className="flex flex-col bg-gray-700 w-86 h-full mt-3/4">
        <div className="flex flex-col items-center justify-center  h-full w-full bg-gray-700 mt-40">
          <div className="flex flex-col items-start justify-start  h-full w-full mt-20 px-4">
            {navigation.map((item, index) => {
              return (
                <div
                  onClick={() => handleNavigation(item.name)}
                  className="flex flex-row items-center justify-start w-full h-16 my-8 space-x-4 px-4 rounded-lg hover:bg-gray-600 hover:cursor-pointer"
                  key={index}
                  value={item.name}
                >
                  {" "}
                  <item.icon className="w-8 h-8 text-gray-200" />
                  <p className="text-white text-2xl font-bold">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col  w-full h-full bg-gray-200">
        {renderStep}
      </div>
    </div>
  );
};

export default AdminPage;
