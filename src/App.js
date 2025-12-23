import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import All from './pages/All'
import Subreddit from './pages/Subreddit/Subreddit'
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <div>
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/all' element={<All />} />
          <Route path='/:display_name' element={<Subreddit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
