import { useState } from 'react'

function ListGroup2() {
  let items = ['An item', 'A second item', 'A third item', 'A fourth item']
  // use the state hook to define state (data that can change over time) in a component.
  // A hook is a function that allows us to tap into built-in features in React.
  // each component can have its own state. If create another List Group, the state is different with this one.
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    //a component can only return a single element.
    //wrap them in a fragment, which is represented by empty angle brackets.
    <>
      <h1>List2</h1>
      <ul className="list-group">
        {/* in JSX, use curly braces to embed JavaScript expression and render data dynamically. */}
        {/* in JSX, only use HTML elements and custom components. */}
        {/* when mapping items, each item must have a unique key, which can be a string or a number. */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={index}
            onClick={() => setSelectedIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup2
