// MainView.jsx
import React, { useState } from 'react';
import BlogPage from './BlogPage';
import LlmsThink from './blogs/LlmThink'

const BlogView = () => {
  const [currentView, setCurrentView] = useState('blogs');

  const showMachineThink = () => {
    setCurrentView('machinethink');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const showBlogs = () => {
    setCurrentView('blogs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {currentView === 'blogs' && <BlogPage onSwitch={showMachineThink} />}
      {currentView === 'machinethink' && <LlmsThink onClose={showBlogs} />}
    </div>
  );
};

export default BlogView;
