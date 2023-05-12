import React, { FormEvent, useRef } from 'react'

const Form1 = () => {
  //use the ref hook to access elements in the DOM.
  //read the value of input fields upon submitting a form.
  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const person = { name: '', age: 0 }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (nameRef.current !== null) person.name = nameRef.current.value
    if (ageRef.current !== null) person.age = Number(ageRef.current.value)
    console.log(person)
  }
  return (
    // shortcut: form>div.mb-3>label.form-label+input.form-control
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      {/*shortcut: div.mb-3>label.form-label+input[type=number].form-control */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      {/*shortcut: button.btn.btn-primary */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form1
