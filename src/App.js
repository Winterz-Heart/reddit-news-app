import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import All from './pages/All'
import Subreddit from './pages/Subreddit'
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <div>
        <Navbar />
        <Routes >
          <Route path='/' Component={Home} />
          <Route path='/all' Component={All} />
          <Route path='/news' Component={Subreddit} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
