import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../admin/comp/adminDashboard";
import AdminNewsLetter from "../admin/comp/adminNewsLetter";
import AdminStats from "../admin/comp/adminStats";
import AdminUserManagement from "../admin/comp/adminUserManagement";
import AdminBlog from "./comp/adminBlog";
import AdminNavBar from "./comp/adminNavBar";
import DoubleChevRightBtn from "../components/buttons/doubleChevRightBtn";
import DoubleChevLeftBtn from "../components/buttons/doubleChevLeftBtn";
const AdminPage = () => {
  const [renderStep, setRenderStep] = useState("");
  const [navBarRender, setNavBarRender] = useState(true);
  const navigate = useNavigate();
  const handleNavigation = (name) => {
    const navTarget = name;
    if (navTarget === "Website") {
      navigate("/MembersArea/Home");
    } else if (navTarget === "Dashboard") {
      setRenderStep(<AdminDashboard />);
    } else if (navTarget === "Stats") {
      setRenderStep(<AdminStats />);
    } else if (navTarget === "Blog") {
      setRenderStep(<AdminBlog />);
    } else if (navTarget === "News Letter") {
      setRenderStep(<AdminNewsLetter />);
    } else if (navTarget === "Members") {
      setRenderStep(<AdminUserManagement />);
    } else {
      return;
    }
  };

  const handleNavRender = () => {
    setNavBarRender(!navBarRender);
  };

  return (
    <div className="flex flex-row h-screen w-full ">
      <div
        className={
          navBarRender
            ? "top-44 left-0 w-54 h-full transform-gpu transform-translate translate-x-0 duration-700 ease-in-out "
            : "transform-gpu  w-0 transform-translate -translate-x-54 duration-1000 ease-in-out"
        }
      >
        <AdminNavBar onItemClicked={handleNavigation} />
      </div>

      {!navBarRender ? (
        <div className="focus:-translate-x-1 animate-pulse ease-in-out duration-700 -translate-x-42 absolute bottom-20 left-48 w-22 h-20 ">
          <DoubleChevRightBtn onClick={handleNavRender} />
        </div>
      ) : (
        <div className="focus:translate-x-1  animate-pulse ease-in-out duration-700 translate-x-40  absolute bottom-20 -left-20  w-22 h-20 ">
          <DoubleChevLeftBtn onClick={handleNavRender} />
        </div>
      )}
      <div className="flex flex-col  w-full h-full  bg-gray-200 ">
        {renderStep}
      </div>
    </div>
  );
};

export default AdminPage;
