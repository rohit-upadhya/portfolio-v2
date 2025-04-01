import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './LandingPage';
import ResearchPage from './ResearchPage';
import BlogsPage from './Blogs'
import LlmsThink from './blogs/LlmThink'
import Lexclipr from './research/LEXCLIPR'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/blog" element={<LandingPage />} />
        <Route path="/blog/research" element={<ResearchPage />} />
        <Route path="/blog/research/lexclipr" element={<Lexclipr />} />

        <Route path="/blog/blogs" element={<BlogsPage />} />
        <Route path="/blog/blogs/llms_think" element={<LlmsThink />} />

      </Route>
    </Routes>
  );
}
