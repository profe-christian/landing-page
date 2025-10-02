import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
