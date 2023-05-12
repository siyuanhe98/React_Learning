import { useEffect } from 'react'
// shortcut for interface
const PrintItem = ({ item }: { item: String }) => {
  // use the effect hook to perform side effects, such as fetching data or updating the DOM.
  useEffect(() => {
    console.log('Fetching data', item)
    // Whenever the dependencies change, the effect hook runs again.
    // If dependencies is a empty array, the effect hook runs only once.
  }, [item])
  return <div>{item}</div>
}

export default PrintItem
