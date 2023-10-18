import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Ruangan from './pages/Ruangan';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/ruangans" element={<Ruangan />} />
        {/* <Route exact path="/peminjaman" element={<Ruangan />} /> */}
        {/* <Route exact path="/ruangan" element={<Ruangan />} /> */}
      </Routes>
    </>
  );
}

export default App;
