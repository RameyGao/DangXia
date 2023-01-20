import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import pageConfigSlice from './features/pageConfigSlice'
import taskSlice from './features/taskSlice'

const reducer = {
  pageConfig: pageConfigSlice.reducer,
  task: taskSlice.reducer
}
const listenerMiddlewareInstance = createListenerMiddleware({
  onError: () => console.error
})

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().prepend(listenerMiddlewareInstance.middleware)
})

export { store }
