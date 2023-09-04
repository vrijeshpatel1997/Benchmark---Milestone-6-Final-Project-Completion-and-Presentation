import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nabar from './layout/Nabar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import EditProduct from './products/editproducts'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Nabar /> {/* Use the Nabar component */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addproduct" element={<AddProduct />} /> 
          <Route exact path="/editproduct/:id" element={<EditProduct />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
