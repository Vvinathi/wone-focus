import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import TaskList from './components/TaskList'; 
import FocusTimer from './components/FocusTimer'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/TaskList" element={<TaskList />} /> 
          <Route path="/FocusTimer/:taskId" element={<FocusTimer />} /> 
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
