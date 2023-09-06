import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Index from "./Pages/Index";
import ShowBathroom from "./Pages/ShowBathroom";




function App() {
  return (
   <div> 
      <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/bathrooms" element={<Index />} />
        <Route path="/bathrooms/:id" element={<ShowBathroom />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;