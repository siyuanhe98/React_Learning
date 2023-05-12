// Create a component using function

function Message() {
  // JSX: JavaScript XML
  const name = 'Siyuan He'
  if (name) {
    return <h1>Hello {name}</h1>
  }
  return <h1>Hello World</h1>
}

export default Message
