import Message from './components/part1/Message'
import {
  ListGroup1,
  ListGroup2,
  ListGroup3,
  ListGroup4,
  ListGroup5,
} from './components/part1/listGroup'
import Alert from './components/part1/Alert'
import { Button1, Button2 } from './components/part1/button'
import Likes from './components/part1/likes'
import { useState } from 'react'
import {
  NestedObjects,
  Array,
  Bugs,
  ExpandableText,
} from './components/part1/states'
import { Navbar, Cart } from './components/part1/shops'

function App1() {
  const handleSelectedItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisibility] = useState(false)
  const [cartItems, setCartItems] = useState(['item1', 'item2'])
  const items = ['An item', 'A second item', 'A third item', 'A fourth item']
  const longString =
    'React is an open-source JavaScript library developed by Facebook for building user interfaces. It uses a component-based architecture and a virtual DOM for efficient rendering. React is popular for creating reusable UI components, improving maintainability and scalability, and has a vast ecosystem and community.'
  return (
    <div>
      <Message />
      <ListGroup1 />
      <ListGroup2 />
      <ListGroup3
        items={items}
        heading="List3"
        onSelectedItem={handleSelectedItem}
      />
      <ListGroup4 />
      <ListGroup5 />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <h1>Alert</h1>
        </Alert>
      )}
      <Button1
        onClick={() => {
          console.log('Clicked')
          setAlertVisibility(true)
        }}>
        Button
      </Button1>
      <Button2
        onClick={() => {
          console.log('Clicked')
          setAlertVisibility(true)
        }}>
        Button
      </Button2>
      <Likes onClick={() => console.log('click')} />
      <NestedObjects />
      <Array />
      <Bugs />
      <Navbar cartNum={cartItems.length} />
      <Cart items={cartItems} onClear={() => setCartItems([])} />
      <ExpandableText children={longString} />
    </div>
  )
}

export default App1
