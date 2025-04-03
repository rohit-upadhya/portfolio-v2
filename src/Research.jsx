// MainView.jsx
import React, { useState } from 'react';
import ResearchPage from './ResearchPage';
import Lexclipr from './research/LEXCLIPR'

const ResearchView = () => {
  const [currentView, setCurrentView] = useState('research');

  const showLexClipr = () => setCurrentView('lexclipr');
  const showResearch = () => setCurrentView('research');

  return (
    <div>
      {currentView === 'research' && <ResearchPage onSwitch={showLexClipr} />}
      {currentView === 'lexclipr' && <Lexclipr onClose={showResearch} />}
    </div>
  );
};

export default ResearchView;
