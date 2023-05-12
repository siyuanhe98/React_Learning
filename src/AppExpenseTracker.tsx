import { useState } from 'react'
import {
  ExpenseFilter,
  ExpenseForm,
  ExpenseList,
} from './components/part2/expense-tracker'
const AppExpenseTracker = () => {
  const [selectCategory, setSelectCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
  ])
  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-5">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <div className="mb-5">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  )
}

export default AppExpenseTracker
