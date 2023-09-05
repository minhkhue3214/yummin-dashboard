import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";

import { UserProfile } from ".";
import avatar from "../data/avatar.jpg";
import { useUsersStore } from "../hooks/users";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { usersState, dispatchUpdateActiveMenu, dispatchUpdateActiveNavbar } =
    useUsersStore();
  // const { handleClick, isClicked } = useStateContext();
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatchUpdateActiveMenu(false);
    } else {
      dispatchUpdateActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () =>
    dispatchUpdateActiveMenu(!usersState.activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color="#03C9D7"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        {/* <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color="#03C9D7"
          icon={<RiNotification3Line />}
        /> */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => dispatchUpdateActiveNavbar(true)}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                There
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {/* {isClicked.notification && <Notification />} */}
        {usersState.isClicked && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
