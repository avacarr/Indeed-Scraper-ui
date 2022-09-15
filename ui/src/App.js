
import './App.css';
import { NavBar } from './components/index';
import { Home, Search, Show, User } from './pages/index';
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
        <div className='animation1'></div>
        <div className='animation2'></div>
        <div className='animation3'></div>
        <div className='animation4'></div>
        <header><NavBar /></header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/show/:id' element={<Show />}/>
          <Route path='/user' element={<User />}/>
        </Routes>
    </div>
  );
}

export default App;
