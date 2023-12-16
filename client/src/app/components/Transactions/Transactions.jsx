import React from "react";
import History from "../Dashboard/History";

const Transactions = () => {
  return (
    <div>
      <h1 className="text-gray-900 dark:text-white"> Transactions History</h1>
      <main>
        <History />
      </main>
    </div>
  );
};

export default Transactions;
