import React from 'react';
import './App.css';
import ArticlesSection from './components/ArticlesSection/ArticlesSection';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleDetailsView from './components/ArticleDetailsView/ArticleDetailsView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ArticlesSection />} />
          <Route path="/actuality/activity/:articleId" element={<ArticleDetailsView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
