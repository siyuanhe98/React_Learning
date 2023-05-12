import { useState } from 'react'
import { produce } from 'immer'

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: 'Bug 1', fixed: false },
    { id: 2, name: 'Bug 2', fixed: false },
    { id: 3, name: 'Bug 3', fixed: false },
  ])

  const handleBugs = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)))
  }

  const handlesBugsWithImmer = () => {
    // update objects and arrays in a more concise and mutable way using immer.
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 2)
        if (bug) bug.name = 'Bug 2 updated by Immer'
      })
    )
  }

  return (
    <div>
      <button onClick={handleBugs}> Fix bugs</button>
      <button onClick={handlesBugsWithImmer}> Update bugs by Immer</button>
      {bugs.map((bug, index) => (
        <p key={index}>
          {bug.name}
          {bug.fixed === true ? ' fixed' : ' not fixed'}
        </p>
      ))}
    </div>
  )
}

export default Bugs
