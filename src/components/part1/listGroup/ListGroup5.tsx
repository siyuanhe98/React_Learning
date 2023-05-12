import { useState } from 'react'
//import CSS in JS
import styled from 'styled-components'

interface ListItemProps {
  active: boolean
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${(props) => (props.active ? 'yellow' : 'none')};
`

function ListGroup5() {
  const items = ['An item', 'A second item', 'A third item', 'A fourth item']
  // use the state hook to define state (data that can change over time) in a component.
  // A hook is a function that allows us to tap into built-in features in React.
  // each component can have its own state. If create another List Group, the state is different with this one.
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    //a component can only return a single element.
    //wrap them in a fragment, which is represented by empty angle brackets.
    <>
      <h1>List5</h1>
      <List>
        {/* in JSX, use curly braces to embed JavaScript expression and render data dynamically. */}
        {/* in JSX, only use HTML elements and custom components. */}
        {/* when mapping items, each item must have a unique key, which can be a string or a number. */}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index)
            }}>
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListGroup5
