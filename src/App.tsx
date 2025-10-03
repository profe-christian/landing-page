import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Layout } from "./layout/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
