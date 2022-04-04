import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
  
        {/* Upon inserting this code my Home page is not working and no display */}
        <Route index element={<Home/>} />
        <Route path="about" index element={<About />} />

      </Route>
    </Routes>
    </>
  )
}

export default App;
