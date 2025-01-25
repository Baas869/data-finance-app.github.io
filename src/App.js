import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/share/pages/Home";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
