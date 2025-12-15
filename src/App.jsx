import "./App.css";
import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
    );
}

export default App;
