import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.page";
import Success from "./pages/sucess.page";
import Produtos from "./pages/produtos.page";
//pages

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Success />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
  </Router>
  );
}

export default App;
