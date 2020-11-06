import React from "react";
import { Expense } from "../types/index";
import "./Budget.css";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
interface BudgetProps {
  expenses: Expense[];
}

const Budget: React.FC<BudgetProps> = ({ expenses }) => {
  const totalValue = (ex: any, type: string) => {
    const amount = ex
      ?.filter((expense: any) => expense.type === type)
      .map((expense: any) => parseInt(expense.value))
      .reduce(
        (previousValue: number, currentValue: number) =>
          previousValue + currentValue,
        0
      );

    return amount;
  };

  const totalAmount = (ex: any) => {
    const totalIncomes = ex
      ?.filter((expense: any) => expense.type === "+")
      .map((expense: any) => parseInt(expense.value))
      .reduce(
        (previousValue: number, currentValue: number) =>
          previousValue + currentValue,
        0
      );
    const totalExpenses = ex
      ?.filter((expense: any) => expense.type === "-")
      .map((expense: any) => parseInt(expense.value))
      .reduce(
        (previousValue: number, currentValue: number) =>
          previousValue + currentValue,
        0
      );
    const totalAmount = totalIncomes - totalExpenses;
    return totalAmount;
  };

  return (
    <>
      <div className="bcontainer">
        <div className="budget">
          <header>
            <div className="total_amount">
              <div className="icon">
              <AccountBalanceIcon/>
              </div>
              <h1>Total Amount</h1>
              {totalAmount(expenses)}
            </div>
          </header>
          <div>
            <div className="income__official">
              <div className="incomes">
                <p>Income</p>
              </div>
              <br />
              <p>{totalValue(expenses, "+")}</p>
            </div>
            <div className="expense__official">
              <div className="expenses">
                <p>Expenses</p>
              </div>
              <br />
              <p>{totalValue(expenses, "-")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
