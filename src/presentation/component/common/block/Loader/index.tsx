import { FC } from "react"
import { CircularProgressProps } from "@mui/material/CircularProgress"
import { CircularProgress } from "./styles"

type PropsT = CircularProgressProps

const Progress: FC<PropsT> = (props) => {
  return <CircularProgress color="inherit" title="Загрузка" {...props} />
}

export default Progress
