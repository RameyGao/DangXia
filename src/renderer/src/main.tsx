import { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import './assets/index.css'
import router from './router'
import { store } from './store'
const App: FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
