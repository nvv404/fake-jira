import { configureStore } from "@reduxjs/toolkit"
import tasksBoardReducer from "data/store/tasksBoardReducer"

const setupStore = () =>
  configureStore({
    reducer: {
      tasksBoard: tasksBoardReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })

const store = setupStore()

type RootState = ReturnType<typeof store.getState>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore["dispatch"]

export { store }
export type { RootState, AppDispatch }
