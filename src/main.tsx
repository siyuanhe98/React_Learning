import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1'
import App2 from './App2'
import AppExpenseTracker from './AppExpenseTracker'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './components/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App1 /> */}
    <App2 />
    {/* <AppExpenseTracker /> */}
  </React.StrictMode>
)
