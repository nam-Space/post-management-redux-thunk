import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Management from "./components/Management";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/management" element={<Management />} />
        </Routes>
    );
}

export default App;
