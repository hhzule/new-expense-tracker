import{ useState } from 'react';
import { Expense } from '../types';

// custom hook
 export const useBudget = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

const addExpense = (expense: Expense) =>{
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
    console.log(newExpenses);

};

const deleteExpense = (index: number) =>{
    const newExpenses = [...expenses];
    newExpenses.splice(index,1);
    setExpenses(newExpenses);
    console.log(newExpenses);

};
return {expenses,addExpense, deleteExpense};
}
