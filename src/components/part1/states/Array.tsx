import { useState } from 'react'

const Array = () => {
  const [arr, setArr] = useState(['item1', 'item2', 'item3'])
  // When updating objects or arrays, we should treat them as immutable objects.
  // Instead of mutating them, we should create new objects or arrays to update the state.
  const handleAddItem = () => {
    setArr([...arr, 'item4'])
  }

  const handleRemoveItem = () => {
    setArr(arr.filter((item) => item !== 'item4'))
  }

  const handleUpdateItem = () => {
    setArr(arr.map((item) => (item === 'item1' ? 'item1 updated' : item)))
  }

  return (
    <div>
      <button onClick={handleAddItem}>Add item</button>
      <button onClick={handleRemoveItem}>Remove item</button>
      <button onClick={handleUpdateItem}>Update item</button>
      {arr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default Array
