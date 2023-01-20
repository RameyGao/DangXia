import { ChakraProvider, theme } from '@chakra-ui/react'
import { FC, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './assets/index.css'
import router from './router'
import { store } from './store'

const App: FC = () => (
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </StrictMode>
)
const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
