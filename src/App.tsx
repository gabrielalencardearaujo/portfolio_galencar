import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Error404 from './pages/Errors/Error404';
import Certificates from "./pages/Certificates/Certificates";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Certificates />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
