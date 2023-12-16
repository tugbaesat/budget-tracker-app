import React, { useEffect, useState } from "react";
import Chart from "../Chart/Chart";
import Stats from "./Stats";
import { useGlobalContext } from "@/app/context/GlobalContext";
import DoughnutIncome from "../Chart/DoughnutIncome";
import DoughnutExpense from "../Chart/DoughnutExpense";

const Dashboard = () => {
  const {
    getIncomes,
    getExpenses,
    totalIncome,
    totalExpense,
    totalBalance,
    incomes,
    expenses,
    transactionHistoryLabel
  } = useGlobalContext();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getIncomes();
      await getExpenses();
      setDataLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1 className="text-gray-900 dark:text-white">Dashboard</h1> */}
      <main className="bg-gray-400 rounded-lg p-6 gap-6">
        {dataLoaded ? (
          <section>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Income
                </h3>
                <DoughnutIncome incomes={incomes} />
              </div>
              <div className="border-l-2 border-gray-900 dark:border-white pl-2">
                <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Expense
                </h3>
                <DoughnutExpense expenses={expenses} />
              </div>
            </div>
            <div className="grid  gap-4 pb-4  border-b-2 border-gray-900 dark:border-white">
              <Stats
                totalIncome={totalIncome}
                totalExpense={totalExpense}
                totalBalance={totalBalance}
              />
              {/* <div className="border-l-2 border-gray-900 dark:border-white pl-2 flex items-center justify-center">
                <Chart
                  incomes={incomes}
                  expenses={expenses}
                  transactionHistoryLabel={transactionHistoryLabel}
                />
              </div> */}
            </div>
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
