import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './comps/Navbar';
import Nave from './comps/navb';
import { ThemeProvider } from './components/ui/theme-provider';
import Home from './comps/home';
import Contact from './comps/contact';
import About from './comps/about';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Router>
      <Nave />
      <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;