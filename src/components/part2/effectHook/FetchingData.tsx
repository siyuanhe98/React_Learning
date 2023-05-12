import userService, { User } from '../../../services/user-service'
import useUsers from '../../../hooks/useUsers'

const FetchingData = () => {
  const { users, error, loading, setUsers, setError } = useUsers()

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter((u) => u.id !== user.id))
    userService.delete(user.id).catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  const addUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 0, name: 'New User' }
    setUsers([...users, newUser])
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }

  const updateUser = (user: User) => {
    const originalUsers = [...users]
    const updatedUser = { ...user, name: user.name + ' Updated' }
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)))
    userService.update(updatedUser).catch((err) => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }

  return (
    <>
      {error && <li className="text-danger">{error}</li>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}>
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FetchingData
