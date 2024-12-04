import './App.css';
import HomePage from './components/HomePage'
import { HoverImageLinks } from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projetcs'
import Other from './components/Other'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HoverImageLinks/>} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/other' element={<Other />} />
      </Routes>

    </div>
  );
}

export default App;
