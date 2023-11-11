import { configureStore } from "@reduxjs/toolkit"

const setupStore = () =>
  configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        /*
                    serializableCheck: false is used to force redux work with js classes
                */
        serializableCheck: false,
      }),
  })

const store = setupStore()

type RootState = ReturnType<typeof store.getState>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore["dispatch"]

export { store }
export type { RootState, AppDispatch }
