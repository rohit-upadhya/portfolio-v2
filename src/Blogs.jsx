// MainView.jsx
import React, { useState } from 'react';
import BlogPage from './BlogPage';
import LlmsThink from './blogs/LlmThink'

const BlogView = () => {
  const [currentView, setCurrentView] = useState('blogs');

  const showMachineThink = () => setCurrentView('machinethink');
  const showBlogs = () => setCurrentView('blogs');

  return (
    <div>
      {currentView === 'blogs' && <BlogPage onSwitch={showMachineThink} />}
      {currentView === 'machinethink' && <LlmsThink onClose={showBlogs} />}
    </div>
  );
};

export default BlogView;
