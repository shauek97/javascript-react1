
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './Home/Home.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import { Routes, Route } from 'react-router-dom';
import WrongAddress from './components/WrongAddress/WrongAddress.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="*" element={<WrongAddress />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>
    </main>
  );
};

export default App;
