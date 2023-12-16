import { useGlobalContext } from "@/app/context/GlobalContext";
import React, { useEffect } from "react";
import Form from "../Form/Form";
import ExpenseItem from "./ExpenseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ExpenseForm from "../Form/ExpenseForm";

const Expenses = () => {
  const {
    addExpense,
    getExpenses,
    deleteExpense,
    totalExpense,
    expenses,
    error,
    setError,
  } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      <h1 className="text-gray-900 dark:text-white">Expenses</h1>
      <main>
        <div className="p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Expense:{" "}
            <span className="text-red-500">
              - <FontAwesomeIcon icon={faDollarSign} />
              {totalExpense()}
            </span>{" "}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <section>
            <ExpenseForm
              addExpense={addExpense}
              getExpenses={getExpenses}
              error={error}
              setError={setError}
            />
          </section>
          <section>
            <ul className="flex flex-col gap-4">
              {expenses.map((expense) => (
                <li key={expense._id}>
                  <ExpenseItem
                    expense={expense}
                    deleteExpense={deleteExpense}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Expenses;
