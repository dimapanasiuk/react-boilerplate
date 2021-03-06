// https://github.com/testing-library/jest-dom#tohavefocus
import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Button from "../Button.jsx"

let container = null
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders with name and without  name", () => {
  act(() => {
    render(<Button label="click me" />, container)
  })
  expect(container.textContent).toBe("click me")
})
