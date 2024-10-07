import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import './../src/'; // Importing the CSS file
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="auth-wrapper">
          <div className="auth-inner"> */}
            <Routes>
              <Route path="/omnipilote" element={<Login />} />
              {/* Remove the following line if SearchForm is not defined */}
              {/* <Route path="/searchForm" element={<SearchForm />} /> */}
              <Route path="categoryPage" element={<CategoryPage />} />
            </Routes>
          {/* </div>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
