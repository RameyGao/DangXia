import { ChakraProvider, theme } from '@chakra-ui/react'
import { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './assets/index.css'
import router from './router'
import { store } from './store'

const App: FC = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
)
const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
