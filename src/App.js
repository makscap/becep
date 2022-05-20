import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import ActivityHomePage from './components/ActivityPage/ActivityHomePage/ActivityHomePage';
import ActivityActualityPage from './components/ActivityPage/ActivityActualityPage/ActivityActualityPage';
import ActivityViziaPage from './components/ActivityPage/ActivityViziaPage/ActivityViziaPage';
import ArticleDetailsView from './components/ActivityPage/ArticleDetailsView/ArticleDetailsView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ActivityHomePage exact />} />
          <Route path="/vizia" element={<ActivityViziaPage />} exact />
          <Route path="/actuality" element={<ActivityActualityPage />} exact />
          <Route path="/actuality/:articleId" element={<ArticleDetailsView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
