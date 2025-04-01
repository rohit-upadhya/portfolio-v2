import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './LandingPage';
import ResearchPage from './ResearchPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/blog" element={<LandingPage />} />
        <Route path="/blog/research" element={<ResearchPage />} />
      </Route>
    </Routes>
  );
}
