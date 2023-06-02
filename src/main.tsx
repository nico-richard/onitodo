import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './TodoApp.tsx'
import './styles/index.sass'
import GeyserCalculatorApp from './GeyserCalculatorApp.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/todo',
    element: <TodoApp />,
  },
  {
    path: '/geyser',
    element: <GeyserCalculatorApp />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
