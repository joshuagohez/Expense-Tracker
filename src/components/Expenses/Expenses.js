import React, {useState} from 'react'
import './expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [year, setYear] = useState("");

  const handleSelectYear = (selectYear) => {
    setYear(selectYear);
  }

  const filteredExpense = props.items.filter(expense => expense.date.getFullYear() === parseInt(year))
  

  return (
      <Card className='expenses'>
        <ExpensesFilter 
          onSelectYear={handleSelectYear}
          selected={year}
        />
        <ExpensesChart 
          expenses={filteredExpense}
        />
        <ExpensesList 
          items={filteredExpense}
        />
      </Card>
  )
}

export default Expenses