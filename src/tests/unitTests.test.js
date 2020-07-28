
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Title from "../components/Title";
import Stocks from "../components/Stocks";
import Ws from "../components/Websocket";


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Title />, container);
  });
  expect(container.textContent).toContain("Ações By");
});

