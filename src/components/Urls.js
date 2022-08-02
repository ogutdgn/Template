import { FaHome, FaUser, FaLock, FaMoneyBill } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

export const getPageTitleByRoute = (path) => {
  var title = "";
  
    routes.forEach(route => {
      if (route.subRoutes !== undefined){
        route.subRoutes.forEach(subRoute => {
          if(path === subRoute.path){
            title = subRoute.name;
          }
        });
      }

      else if(path === route.path){
        title = route.name;
      }
    });
    return title;
}

const routes = [
    {
      path: "/",
      name: "Home", 
      icon: <FaHome />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/todos",
      name: "Todos",
      icon: <FcTodoList />,
    },
    {
      path: "/file-manager",
      name: "File Manager",
      icon: <AiTwotoneFileExclamation />,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <MdMessage/>,
    },
    {
      path: "/order",
      name: "Order",
      icon: <BsCartCheck />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <BiCog />,
      exact: true,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/saved",
      name: "Saved",
      icon: <AiFillHeart />,
    },
  ];

export default routes;