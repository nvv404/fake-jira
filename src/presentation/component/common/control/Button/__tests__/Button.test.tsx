import { screen } from "@testing-library/react"
import { describe, it } from "vitest"
import { renderWithProviders } from "presentation/utils/renderWithProviders"
import Button from "presentation/component/common/control/Button"

const MOCK_BUTTON_CHILDREN_TEXT = "hello world"

describe("Common button component", () => {
  it("render items properly", async () => {
    renderWithProviders(<Button>{MOCK_BUTTON_CHILDREN_TEXT}</Button>)

    expect(screen.getByText(MOCK_BUTTON_CHILDREN_TEXT)).toBeInTheDocument()
  })
})
