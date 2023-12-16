"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "../../images/avatar.webp";
import NavigationItem from "./NavigationItem";
import menuItems from "@/app/utils/menuItems";
import signout from "../../images/icons/icons8-close-pane-48.png";

const Navigation = ({ activeTab, handleActiveTab, handleDisplayedTab }) => {
  const onClickTab = (id) => {
    handleActiveTab(id);
    handleDisplayedTab(id);
  };
  return (
    <nav className="flex md:flex-col p-2 md:p-6 bg-slate-400 dark:bg-slate-600 rounded-md md:w-[20%] md:justify-between justify-center align-center">
      <section className="flex md:flex-col md:gap-10">
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt="profile image"
            width={60}
            height={60}
            className="rounded-full"
          ></Image>
          <h2 className="text-gray-900 dark:text-white">Tugba Esat</h2>
        </div>
        <ul className="flex md:flex-col gap-4 text-xs md:text-sm justify-center align-center">
          {menuItems.map((menu) => (
            <li
              key={menu.id}
              onClick={() => onClickTab(menu.id)}
              className={`border-transparent cursor-pointer ${
                activeTab === menu.id
                  ? "font-extrabold text-slate-800 pl-2"
                  : "text-slate-700"
              }`}
            >
              <NavigationItem menu={menu} />
            </li>
          ))}
        </ul>
      </section>
      <div className="flex items-center gap-2 text-sm cursor-pointer hover:font-extrabold hover:text-slate-800">
        <Image src={signout} alt="icon" width={24} height={24}></Image>
        <span className="text-gray-900 dark:text-white">Sign Out</span>
      </div>
    </nav>
  );
};

export default Navigation;
