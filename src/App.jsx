import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import About from "./components/Cart";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;