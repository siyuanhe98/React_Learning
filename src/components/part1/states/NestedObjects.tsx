import { useState } from 'react'
import { produce } from 'immer'
// Group related state variables into an object to keep them organized.
const NestedObjects = () => {
  const [nestedProduct, setNestedProduct] = useState({
    id: 1,
    details: {
      name: 'Product 1',
      price: 9.9,
    },
  })

  const [item, setItem] = useState({
    id: 1,
    details: {
      price: 0.98,
      name: 'Milk',
      locations: ['Target'],
    },
  })

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product1', quantity: 1 },
      { id: 2, title: 'Product2', quantity: 1 },
    ],
  })

  const handleNestedProduct = () => {
    setNestedProduct({
      ...nestedProduct,
      details: {
        ...nestedProduct.details,
        price: 10.9,
      },
    })
  }

  const handleItem = () => {
    setItem({
      ...item,
      details: {
        ...item.details,
        name: 'Milk updated',
        locations: [...item.details.locations, 'Walmart'],
      },
    })
  }

  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id == 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })
  }
  const handleCartWithImmer = () => {
    setCart(
      produce(cart, (draft) => {
        const itemFound = draft.items.find((item) => item.id === 2)
        if (itemFound) {
          itemFound.quantity += 1
        }
      })
    )
  }

  return (
    <div>
      <button onClick={handleNestedProduct}> Change price</button>
      <p>{nestedProduct.id}</p>
      <p>{nestedProduct.details.name}</p>
      <p>{nestedProduct.details.price}</p>
      <button onClick={handleItem}> Change item</button>
      <p>{item.id}</p>
      <p>{item.details.price}</p>
      <p>{item.details.name}</p>
      <p>{item.details.locations}</p>
      <button onClick={handleCart}> Change cart</button>
      <button onClick={handleCartWithImmer}> Change cart by immer</button>
      <p>{cart.discount}</p>
      <p>{cart.items[0].id}</p>
      <p>{cart.items[0].title}</p>
      <p>{cart.items[0].quantity}</p>
      <p>{cart.items[1].id}</p>
      <p>{cart.items[1].title}</p>
      <p>{cart.items[1].quantity}</p>
    </div>
  )
}

export default NestedObjects
