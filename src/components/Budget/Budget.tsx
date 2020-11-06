import React from 'react';
import { Expense } from '../types/index';

interface BudgetProps {
  expenses: Expense[];
}


const Budget: React.FC<BudgetProps> = ( {expenses} ) => {

   const totalValue = (ex: any, type: string) => {
    const amount = ex?.filter((expense: any) => expense.type === type )
        .map((expense : any) => parseInt(expense.value))
        .reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);

    return amount;

};


const totalAmount = (ex: any) => {
  const totalIncomes = ex?.filter((expense : any) => expense.type === "+")
    .map((expense : any) => parseInt(expense.value))
    .reduce((previousValue: number, currentValue:number) => previousValue + currentValue, 0);
  const totalExpenses = ex?.filter((expense : any) => expense.type === "-")
    .map(( expense : any) => parseInt(expense.value))
    .reduce((previousValue: number, currentValue:number) => previousValue + currentValue, 0);
  const totalAmount = (totalIncomes - totalExpenses);
  return totalAmount;
};


    return (
  <>
    <header>
        <h1>Total Amount</h1>
     {totalAmount(expenses)} 
    </header>
    <p>Income</p>
            <p>{totalValue(expenses, "+")}</p>
           
    <p>Expenses</p>
            <p>{totalValue(expenses, "-")}</p>
  </>
)};

export default Budget;