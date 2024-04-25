import React, { useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 2, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Desk (White)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e6',
    title: 'Water',
    amount: 2,
    date: new Date(2020, 2, 14),
  },
  {
    id: 'e7',
    title: 'Notebook',
    amount: 5,
    date: new Date(2023, 1, 14),
  },
  {
    id: 'e8',
    title: 'Plants',
    amount: 20,
    date: new Date(2023, 0, 14),
  },
  {
    id: 'e9',
    title: 'Dental',
    amount: 400,
    date: new Date(2024, 1, 27),
  },
  {
    id: 'e10',
    title: 'Dance Classes',
    amount: 200,
    date: new Date(2024, 3, 14),
  },
]

// arrow functions
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div className='APP_js level_one parent'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
} // end of the function

// 1. export the file
export default App
