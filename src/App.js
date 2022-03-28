import React, { useState } from "react"
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import initialExpenses from "./components/Expenses/expenseData"

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense 
        onAddExpense={addExpenseHandler}
      />
      <Expenses 
        items={expenses}
      />
    </div>
  );
}

export default App;
