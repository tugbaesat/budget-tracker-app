import { useGlobalContext } from "@/app/context/GlobalContext";
import React, { useEffect } from "react";
import Form from "../Form/Form";
import IncomeItem from "./IncomeItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Incomes = () => {
  const {
    addIncome,
    getIncomes,
    deleteIncome,
    totalIncome,
    incomes,
    error,
    setError,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div>
      <h1 className="text-gray-900 dark:text-white">Incomes</h1>
      <main className="">
        <div className="p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-center items-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Income:{" "}
            <span className="text-green-500">
              <FontAwesomeIcon icon={faDollarSign} />
              {totalIncome()}
            </span>{" "}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <section>
            <Form
              addIncome={addIncome}
              getIncomes={getIncomes}
              error={error}
              setError={setError}
            />
          </section>
          <section>
            <ul className="flex flex-col gap-4">
              {incomes.map((income) => (
                <li key={income._id}>
                  <IncomeItem income={income} deleteIncome={deleteIncome} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Incomes;
