// App.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [content, setContent] = useState('Recuperação tributária'); // Defina o estado inicial como 'Recuperação tributária'

  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row">
          <Sidebar setContent={setContent} />
          <MainContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default App;

