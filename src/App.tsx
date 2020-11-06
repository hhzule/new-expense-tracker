import React, { useState} from 'react';
import './App.css';
import {useBudget} from './components/hooks/useBudget';
import Budget from './components/Budget/Budget';

function App() {

  const {expenses, addExpense, deleteExpense} = useBudget();
  const [newVal, setNewVal] =  useState({
    type:'',
    value: 0,
    description:''
});
  const incomes = expenses.filter(( expenses : any) => expenses.type === "+");
   const newExpenses = expenses.filter((expense : any) => expense.type === "-");
 const handleSubmit = (e: any) => {
   e.preventDefault();
   addExpense(newVal)
   setNewVal({
    type:'',
    value: 0,
    description:''
})
 }
 const setOBJ= (e:any)=>{
  setNewVal( {...newVal, [e.target.name]:e.target.value })
   
 }

 
  return (
   
    <div>
      <Budget expenses={expenses}/>
      <h1>Income</h1>
      <div>
        {incomes?.map((expense: any, index: number) => (
      
        <div key={index} onClick={() =>deleteExpense(index)}>
    <h1>{expense.description}</h1>
    <h3>{expense.value}</h3>
     <button   onClick={() =>deleteExpense(index)}> del</button>
  </div>
        ))}
      </div>
       <h1>Expense</h1>
      <div>
        {newExpenses?.map(( expense : any, index: number) => (
        
        <div key={index}>
    <h1>{expense.description}</h1>
    <h3>{expense.value}</h3>
   
   <button   onClick={() =>deleteExpense(index)}> del</button>
  </div>
        ))}
      </div>
        <form onSubmit={handleSubmit}>
        <select name="type"
                value={newVal.type}
                
                   onChange={(e)=>setOBJ(e)}
                >
          <option value="" label="Select">Select</option>
          <option value="+" label="+">+</option>
          <option value="-" label="-">-</option>
        </select>
        <input width={100}
               placeholder="Value"
               type="number"
               name="value"
               value={newVal.value} 
                  onChange={(e)=>setOBJ(e)}
               />
        <input width={100}
               placeholder="Description"
               type="text"
               name="description"
                              value={newVal.description}
                onChange={(e)=>setOBJ(e)}
            

                />
        <button type="submit" >
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
