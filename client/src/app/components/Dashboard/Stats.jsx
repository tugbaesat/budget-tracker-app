import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Stats = ({ totalIncome, totalExpense, totalBalance }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-6">
        <div className="p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center">
          <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
            Total Income:{" "}
            <span className="text-green-500">
              <FontAwesomeIcon icon={faDollarSign} />
              {totalIncome()}
            </span>{" "}
          </h3>
        </div>
        <div className="p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center">
          <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
            Total Expense:{" "}
            <span className="text-red-500">
               <FontAwesomeIcon icon={faDollarSign} />
                -{totalExpense()}
            </span>{" "}
          </h3>
        </div>
      </div>

      <div className="p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center">
        <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
          Total Balance:{" "}
          <span className="text-gray-300">
            <FontAwesomeIcon icon={faDollarSign} />
            {totalBalance()}
          </span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Stats;
