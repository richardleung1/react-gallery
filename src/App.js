import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import Recent from "./components/Recent";
import Show from "./components/Show";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <h1>React Gallery</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/:id" element={<Show />} />
          <Route path="/:id/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
