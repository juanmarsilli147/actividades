import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTaskList from './AppTaskList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTaskList />
  </StrictMode>,
)
