// TODO: Improve error boundary
import { Component, ErrorInfo, ReactNode } from "react"

type PropsT = {
  children: ReactNode
}

type StateT = {
  hasError: boolean
}

class ErrorBoundary extends Component<PropsT, StateT> {
  public state: StateT = {
    hasError: false,
  }

  public static getDerivedStateFromError(): StateT {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return (
        <h1>Произошла непредвиденная ошибка, пожалуйста, обновите страницу</h1>
      )
    }

    return children
  }
}

export default ErrorBoundary
