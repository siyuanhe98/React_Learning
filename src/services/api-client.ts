import axios, { CanceledError } from 'axios'
// create axios instance with custom config
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export { CanceledError }
