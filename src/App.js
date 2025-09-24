import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import ServiceDetail from './components/pages/ServiceDetail';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:serviceId' element={<ServiceDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;