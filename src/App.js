import React from 'react';
import './App.css';
import ArticlesSection from './components/ArticlesSection/ArticlesSection';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ActivityView from './components/ActivityView/ActivityView';
import ArticleDetailsView from './components/ArticleDetailsView/ArticleDetailsView';
import NotFound from './screens/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ArticlesSection />} />
          <Route path="/actuality" element={<NotFound />} exact />
          <Route path="/actuality/activity" element={<ActivityView />} exact />
          <Route path="/actuality/activity/:articleId" element={<ArticleDetailsView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
