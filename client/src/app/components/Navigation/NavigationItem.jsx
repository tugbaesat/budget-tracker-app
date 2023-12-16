import Link from "next/link";
import React from "react";
import Image from "next/image";

const NavigationItem = ({ menu }) => {
  return (
    <a className="flex items-center gap-2 text-gray-900 dark:text-white">
      <Image
        src={menu.icon}
        alt="icon"
        width={24}
        height={24}
        className="hidden md:inline-block"
      ></Image>
      <p>{menu.name}</p>
    </a>
  );
};

export default NavigationItem;
