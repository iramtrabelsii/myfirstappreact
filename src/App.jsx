import './css/App.css';
import Moviecard from './assets/components/Moviecard'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './assets/components/NavBar';
import { MovieProvider } from './assets/contexts/MovieContext';


function App() {
  return (
    <MovieProvider>
     <div>
       <NavBar />
     <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Favorites" element={<Favorites />}/>
        </Routes>

     </main>
     </div>
     </MovieProvider>
  );
}

export default App
