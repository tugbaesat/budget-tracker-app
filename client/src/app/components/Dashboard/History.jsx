import React from "react";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCalendarDays,
  faLayerGroup,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { dateFormat } from "@/app/utils/dateFormat";

const History = () => {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();
  return (
    <div className="">
      {history.map((item) => (
        <div
          key={item._id}
          className={`p-6 my-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400`}
        >
          <div className="flex items-center justify-between mb-2">
            <p>
              <FontAwesomeIcon icon={faCalendarDays} /> {dateFormat(item.date)}
            </p>
            <p
              className={`${
                item.type === "expense" ? "text-red-500" : "text-green-500"
              }`}
            >
              {item.type === "expense" && "-"}{" "}
              <FontAwesomeIcon icon={faDollarSign} /> {item.amount}
            </p>
          </div>
          <div className="flex gap-4 font-normal text-sm  items-center">
            <p>
              <FontAwesomeIcon icon={faLayerGroup} /> {item.category}
            </p>
            <p>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
