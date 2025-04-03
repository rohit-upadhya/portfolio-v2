import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './LandingPage';
import BlogView from './Blogs'
import LlmsThink from './blogs/LlmThink'
import ResearchView from './Research'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/portfolio-v2" element={<LandingPage />} />
        {/* <Route path="/portfolio-v2/research" element={<ResearchPage />} />
        <Route path="/portfolio-v2/lexclipr" element={<Lexclipr />} /> */}
        <Route path="/portfolio-v2/research" element={<ResearchView />} />
        <Route path="/portfolio-v2/blogs" element={<BlogView />} />
        <Route path="/portfolio-v2/blogs/llms_think" element={<LlmsThink />} />

      </Route>
    </Routes>
  );
}
