"use client";
import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import { GlobalProvider } from "./context/GlobalContext";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedTab, setDisplayedTab] = useState(1);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };
  const handleDisplayedTab = (id) => {
    setDisplayedTab(id);
  };

  return (
    <GlobalProvider>
      <main className="p-6 bg-slate-200 dark:bg-slate-800 flex gap-6 flex-col md:flex-row min-h-screen">
        <Navigation
          handleActiveTab={handleActiveTab}
          activeTab={activeTab}
          handleDisplayedTab={handleDisplayedTab}
        />
        {/* <a target="_blank" href="https://icons8.com/icon/2WP6HZwhbWw8/control-panel">Dashboard</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        <Main displayedTab={displayedTab} />
      </main>
    </GlobalProvider>
  );
}
