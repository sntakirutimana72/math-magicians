import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
