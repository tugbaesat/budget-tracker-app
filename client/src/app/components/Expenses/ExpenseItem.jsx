import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCalendarDays,
  faLayerGroup,
  faComment,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { dateFormat } from "@/app/utils/dateFormat";

const ExpenseItem = ({ expense, deleteExpense }) => {
  const capitalizedTitle =
    expense.title.charAt(0).toUpperCase() + expense.title.slice(1);

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex gap-2 items-center justify-between text-gray-900 dark:text-white mb-4">
        <div className="flex gap-2 items-center ">
          <div className="rounded-full w-2 h-2 bg-red-500 inline-block mr-2"></div>
          <h5 className="text-lg font-bold tracking-tight">
            {capitalizedTitle}
          </h5>
        </div>
        <p>
          <FontAwesomeIcon icon={faDollarSign} /> -{expense.amount}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-4 font-normal text-sm text-gray-700 dark:text-gray-400">
          <p>
            <FontAwesomeIcon icon={faLayerGroup} /> {expense.category}
          </p>

          <p>
            <FontAwesomeIcon icon={faCalendarDays} /> {dateFormat(expense.date)}
          </p>

          <p>
            <FontAwesomeIcon icon={faComment} /> {expense.description}
          </p>
        </div>
        <button
          className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500"
          onClick={() => deleteExpense(expense._id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
