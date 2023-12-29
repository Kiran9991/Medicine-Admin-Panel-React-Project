import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { MedicinesProvider } from "./components/contexts/medicine-context";
import { CartItemsProvider } from "./components/contexts/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MedicinesProvider>
    <CartItemsProvider>
      <App />
    </CartItemsProvider>
  </MedicinesProvider>
);
