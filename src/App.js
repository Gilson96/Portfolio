import './App.css';
import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projetcs'
import ProjectBank from './components/ProjectBank'
import ProjectFood from './components/ProjectFood'

function App() {
  return (
    <div className="bg-gray-100">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bank' element={<ProjectBank />} />
        <Route path='/food' element={<ProjectFood />} />
      </Routes>

    </div>
  );
}

export default App;
