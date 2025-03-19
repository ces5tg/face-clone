import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CardMenu from "../navbar/CardMenu";
import CardChats from "../navbar/CardChats";

const Navbar = () => {
  const location = useLocation();

  const [activeAction, setActiveAction] = useState<string | null>(null)

  const handleActionClick = (id: string) => {
    setActiveAction(prev => (prev == id ? null : id))
  }
  const menuItems = [
    { name: "Home", id: "home", path: "/", icon: "fa-solid fa-house" },
    { name: "Friends", id: "friends", path: "/friends", icon: "fa-solid fa-user-group" },
    { name: "Watch", id: "watch", path: "/watch", icon: "fa-solid fa-video" },
    { name: "Groups", id: "groups", path: "/groups", icon: "fa-regular fa-circle-user" },
    { name: "Gaming", id: "gaming", path: "/gaming", icon: "fa-solid fa-gamepad" },
  ];
  const userActions = [
    { id: "menu", icon: "fas fa-th" },
    { id: "messenger", icon: "fab fa-facebook-messenger" },
    { id: "notifications", icon: "fas fa-bell" },
    { id: "account", icon: "fas fa-user-circle " },
  ]
  const texto = "fas fa-chevron-down"
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenSearch(false);
      }
    };

    if (openSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearch]);

  return (
    <div className="grid grid-cols-11 h-16 bg-white shadow-sm shadow-gray-200 fixed z-50 w-full">
      <div className="col-span-3 h-full w-full">
        <div className="flex items-center justify-start h-full relative ">
          <div className="pl-4 ">
            <span className="flex justify-center items-center bg-[rgb(22,101,186)] h-12 w-12 text-white text-3xl rounded-full"><i className="fa-brands fa-facebook-f"></i></span>

          </div>
          <div className="pl-2 " onClick={() => { setOpenSearch(true) }}>
            <span className="flex justify-center items-center bg-slate-100 h-12 w-12 text-gray-500 text-gl rounded-full "><i className="fas fa-search" ></i></span>
          </div>
          {openSearch && (
            <div ref={modalRef} className="absolute top-0 left-0  w-[23rem] h-96  bg-white shadow-lg p-2">
              <div className="flex">
                <div className=" " onClick={() => { setOpenSearch(!openSearch) }}>
                  <span className="flex justify-center items-center hover:bg-gray-100 h-10 w-10 text-gray-400 text-lg rounded-full"><i className="fa-solid fa-left-long"></i> </span>
                </div>
                <div className="flex flex-1 bg-gray-100 rounded-full" >
                  <div className="flex">
                    <span className="flex justify-center items-center hover:bg-gray-100 h-10 w-10 text-gray-400 text-md rounded-full"><i className="fas fa-search"></i> </span>
                    <input type="text" className=" bg-transparent outline-none p-1" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-5 h-full">
        <div className="grid grid-cols-5 gap-4 h-full">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full text-center flex items-center justify-center cursor-pointer transition-all mt-1
              ${location.pathname === item.path
                  ? "border-b-4 border-[rgb(0,122,255)]  bg-white rounded-t-lg text-[rgb(0,122,255)] font-bold"
                  : "border-b-4 border-white hover:border-white  hover:bg-gray-100 hover:rounded-lg"
                }`}
            >
              <i className={`text-xl ${item.icon}`}></i>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex justify-end items-center h-full mr-2 relative">
          {userActions.map((item) => {
            return (
              <div className="pr-2 " onClick={() => handleActionClick(item.id)}>
                <span className="flex justify-center items-center bg-slate-100 h-12 w-12 text-2xl rounded-full text-black "><i className={item.icon} ></i></span>
              </div>
            );
          })}
          {activeAction == "menu" && (
            <div className="absolute top-0 right-0 mt-16 mr-1 ">
              <CardMenu></CardMenu>
            </div>
          )}
          {activeAction == "messenger" && (
            <div className="absolute top-0 right-0 mt-16 mr-1 ">
            <CardChats></CardChats>
          </div>
          )}
          {activeAction == "notifications" && (
            <div className="absolute top-0 right-0 mt-16 mr-1 bg-white w-48 h-48 ">hdolssssssa</div>
          )}
          {activeAction == "account" && (
            <div className="absolute top-0 right-0 mt-16 mr-1 bg-white w-48 h-48 ">holddda</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
