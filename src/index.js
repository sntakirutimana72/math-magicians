import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
