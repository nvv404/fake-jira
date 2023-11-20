import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit"
import tasksBoardReducer from "data/store/tasksBoardReducer"

const rootReducer = combineReducers({
  tasksBoard: tasksBoardReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })

const store = setupStore()

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore["dispatch"]

export { store }
export type { RootState, AppStore, AppDispatch }
