import './css/App.css';
import Moviecard from './assets/components/Moviecard'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './assets/components/NavBar';



function App() {
  return (
     <div>
       <NavBar />
     <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Favorites" element={<Favorites />}/>
        </Routes>

     </main>
     </div>
  );
}

export default App
