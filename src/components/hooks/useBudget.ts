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

const deleteExpense = (id: number) =>{
    const newExpenses = [...expenses];
   const updated = newExpenses.filter((expense)=> expense.id !== id);
    setExpenses(updated);
    

};
return {expenses,addExpense, deleteExpense};
}
