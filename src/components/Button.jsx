import React from "react";

import { useUsersStore } from "../hooks/users";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { dispatchUpdateActiveNavbar } = useUsersStore();

  return (
    <button
      type="button"
      onClick={() => dispatchUpdateActiveNavbar(false)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
