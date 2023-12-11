import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Career from './Career';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
