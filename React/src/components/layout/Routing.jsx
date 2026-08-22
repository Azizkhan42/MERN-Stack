import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Home'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routing;
