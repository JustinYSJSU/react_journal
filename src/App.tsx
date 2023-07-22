import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./css/App.css";
import { Main } from './pages/login';
import { Home } from './pages/home';
import { CreateEntry } from './pages/create_entry';
import { ViewEntry } from './pages/view_entry';
import { About } from './pages/about';
import { ReviewEntry } from './pages/review_entry';

function App(){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Main />} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/newEntry" element = {<CreateEntry />} />
          <Route path = "/viewEntries" element = {<ViewEntry />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/entry/:id/:docID" element = {<ReviewEntry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
