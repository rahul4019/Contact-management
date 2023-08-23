import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ChartAndMaps from './pages/ChartAndMaps';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/charts-and-maps" element={<ChartAndMaps />} />
      </Routes>
    </Layout>
  );
}

export default App;
