import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route index element={<Index />} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
