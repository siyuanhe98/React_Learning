import React from 'react'

interface CartProps {
  items: string[]
  onClear: () => void
}
const Cart = ({ items, onClear }: CartProps) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}> Clear Cart</button>
    </div>
  )
}

export default Cart
