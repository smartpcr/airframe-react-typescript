import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { RoutedContent } from './Routes';
import AppLayout from './layouts/AppLayout';

const basePath = process.env.BASE_PATH || '/';

function App() {
  return (
    <Router basename={basePath}>
      <AppLayout>
        <RoutedContent />
      </AppLayout>
    </Router>
  );
}

export default App;
