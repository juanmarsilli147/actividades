import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTaskList from './AppTaskList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTaskList />
  </StrictMode>,
)
