// import vanilla CSS
// import './ListGroup4.css'
// import CSS Modules
import styles from './ListGroup4.module.css'

function ListGroup4() {
  const items = ['An item', 'A second item', 'A third item', 'A fourth item']
  return (
    //a component can only return a single element.
    //wrap them in a fragment, which is represented by empty angle brackets.
    <>
      {/* <ul className="list-group4"> */}
      <ul className={[styles.listGroup4, styles.container].join(' ')}>
        {/* in JSX, use curly braces to embed JavaScript expression and render data dynamically. */}
        {/* in JSX, only use HTML elements and custom components. */}
        {/* when mapping items, each item must have a unique key, which can be a string or a number. */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup4
