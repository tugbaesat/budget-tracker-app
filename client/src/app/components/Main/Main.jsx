import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Transactions from "../Transactions/Transactions";
import Incomes from "../Incomes/Incomes";
import Expenses from "../Expenses/Expenses";
// import { useGlobalContext } from "@/app/context/GlobalContext";

const Main = ({ displayedTab }) => {
  return (
    <div className="flex flex-col p-6  bg-slate-400 dark:bg-slate-600 rounded-md w-[80%] justify-between overflow-hidden">
      {displayedTab === 1 && <Dashboard />}
      {displayedTab === 2 && <Transactions />}
      {displayedTab === 3 && <Incomes />}
      {displayedTab === 4 && <Expenses />}
    </div>
  );
};

export default Main;
