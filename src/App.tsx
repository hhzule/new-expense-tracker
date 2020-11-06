import React, { useState } from "react";
import "./App.css";
import { useBudget } from "./components/hooks/useBudget";
import Budget from "./components/Budget/Budget";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
function App() {
  const { expenses, addExpense, deleteExpense } = useBudget();
  const [newVal, setNewVal] = useState({
    type: "",
    value: 0,
    description: "",
    id: 0
  });
  const incomes = expenses.filter((expenses: any) => expenses.type === "+");
  const newExpenses = expenses.filter((expense: any) => expense.type === "-");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addExpense(newVal);
    setNewVal({
      type: "",
      value: 0,
      description: "",
      id:0
    });
  };
  const setOBJ = (e: any) => {
    setNewVal({ ...newVal, [e.target.name]: e.target.value, id: Math.floor(Math.random()*100) });
  };

  return (
    <div className="main">
      <Budget expenses={expenses} />
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <select name="type" value={newVal.type} onChange={(e) => setOBJ(e)}>
          <option value="" label="Select">
            Select
          </option>
          <option value="+" label="+">
            +
          </option>
          <option value="-" label="-">
            -
          </option>
        </select>
        <input
          width={100}
          placeholder="Value"
          type="number"
          name="value"
          value={newVal.value}
          onChange={(e) => setOBJ(e)}
        /><br/>
        <input
          width={100}
          placeholder="Description"
          type="text"
          name="description"
          value={newVal.description}
          onChange={(e) => setOBJ(e)}
        />
        <button type="submit">Add</button>
      </form>
      <div className='display'>
        <div className="income">
          <h1>Income</h1>
          <div className='individuallista'>
            {incomes?.map((expense: any) => (
              <div className='list' key={expense.id}>
                <p>{expense.description}</p>
                <p>{expense.value}</p>
              <DeleteOutlineIcon onClick={() => deleteExpense(expense.id)}></DeleteOutlineIcon>
              </div>
            ))}
          </div>
        </div>
        <div className="expense">
          <h1>Expense</h1>
          <div className='individuallistb'>
            {newExpenses?.map((expense: any) => (
              <div className='list' key={expense.id}>
                <p>{expense.description}</p>
                <p>{expense.value}</p>
<DeleteOutlineIcon onClick={() => deleteExpense(expense.id)}></DeleteOutlineIcon>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
