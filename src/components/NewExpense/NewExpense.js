import React, {useState} from 'react'
import './newExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [activeForm, setActive] = useState(false);

    const handleClick = () => {
        setActive(prevValue => {
            return !prevValue
        })
    }

    const submitExpenseHandler = (submittedExpenseData) => {
        const revisesdExpenseData = {
            ...submittedExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(revisesdExpenseData);

        setActive(false);
    }

  return (
    <div className='new-expense'>
        {activeForm === true 
        ? 
        <ExpenseForm 
            onSubmitExpense={submitExpenseHandler}
            onCancel={handleClick}
        />
        :
        <button onClick={handleClick}>Add New Expense</button>
        }
    </div>
  )
}

export default NewExpense