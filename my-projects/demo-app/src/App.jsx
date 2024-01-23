import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";

import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import StyleWrapper from "./components/StyleWrapper";
import ProductsLayout from "./components/ProductsLayout";
import Men from "./pages/Products/Men";
import Women from "./pages/Products/Women";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route
            index
            element={
              <StyleWrapper>
                <Home />
              </StyleWrapper>
            }
          />
          <Route path="products" element={<ProductsLayout />}>
            <Route
              index
              element={
                <StyleWrapper>
                  <Products />
                </StyleWrapper>
              }
            />
            <Route
              path="men"
              element={
                <StyleWrapper>
                  <Men />
                </StyleWrapper>
              }
            />
            <Route
              path="women"
              element={
                <StyleWrapper>
                  <Women />
                </StyleWrapper>
              }
            />
          </Route>
          <Route
            path="about"
            element={
              <StyleWrapper>
                <About />
              </StyleWrapper>
            }
          />
          <Route
            path="contacts"
            element={
              <StyleWrapper>
                <Contacts />
              </StyleWrapper>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
