import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Index from "./Pages/Index";
import ShowBathroom from "./Pages/ShowBathroom";
import NavBar from "./Components/navBar/NavBar";
import EditForm from "./Pages/EditForm";
import NewBathroomForm from "./Pages/NewBathroomForm";




function App() {
  return (
   <div> 
      <Router>
        <NavBar />
      <Routes>
        <Route path="/bathrooms" element={<Index />} />
        <Route path="/bathrooms/new" element={<NewBathroomForm />} />
        <Route path="/bathrooms/:id" element={<ShowBathroom />} />
        <Route path="/bathrooms/:id/edit" element={<EditForm />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;