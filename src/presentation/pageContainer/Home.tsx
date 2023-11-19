import { FC, useEffect } from "react"
import { fetchTaskBoards } from "data/store/tasksBoardReducer/api/actions"
import HomePage from "presentation/component/page/home"
import useAppDispatch from "presentation/hook/useAppDispatch"

const Home: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTaskBoards({}))
  }, [dispatch])

  return <HomePage />
}

export default Home
