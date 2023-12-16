import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1/";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => (totalIncome += income.amount));
    return totalIncome;
  };

  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
  };

  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpense = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => (totalExpense += expense.amount));
    return totalExpense;
  };
  const totalBalance = () => {
    let totalBalance = totalIncome() - totalExpense();
    return parseFloat(totalBalance.toFixed(2));
  };

  const transactionHistoryLabel = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(a.date) - new Date(b.date));
    return history;
  };
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(b.date) - new Date(a.date));
    return history;
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        incomes,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        expenses,
        totalBalance,
        transactionHistory,
        transactionHistoryLabel,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
