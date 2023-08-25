import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ChartAndMaps from './pages/ChartAndMaps';
import Layout from './components/Layout';
import EditContact from './pages/EditContact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<Contact />} />
        <Route path="/edit-contact" element={<EditContact />} />
        <Route path="/charts-and-maps" element={<ChartAndMaps />} />
      </Routes>
    </Layout>
  );
}

export default App;
