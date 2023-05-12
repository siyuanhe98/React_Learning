import { MouseEvent } from 'react'

function ListGroup1() {
  let items = ['An item', 'A second item', 'A third item', 'A fourth item']
  let emptyItems: string[] = []

  // use type annotation to specify the type of the event parameter.
  const handleClick = (event: MouseEvent) => {
    console.log(event)
  }

  return (
    //a component can only return a single element.
    //wrap them in a fragment, which is represented by empty angle brackets.
    <>
      {emptyItems.length === 0 && <p>There are no items in the emptyItems.</p>}
      <h1>List1</h1>
      <ul className="list-group">
        {/* in JSX, use curly braces to embed JavaScript expression and render data dynamically. */}
        {/* in JSX, only use HTML elements and custom components. */}
        {/* when mapping items, each item must have a unique key, which can be a string or a number. */}
        {items.map((item, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup1
