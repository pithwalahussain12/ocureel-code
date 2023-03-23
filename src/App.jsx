import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import RemainingTime from './Components/RemainingTime'
import GetInspired from './Components/GetInspired'
import Community from './Components/CommunityGuidline'
import Press from './Components/Press'
import About from './Components/About'
import Subscribe from './Components/Subscribe'
import Play from './Components/Play'
import Leaderboard from './Components/Leaderboard'
import Privacy from './Components/PrivacyPolicy/index.jsx'
import TermsOfService from './Components/TermOfService/index.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<RemainingTime />} />
        <Route path='/community' element={<Community />} />{/*need to arrange data */}
        <Route path='/press' element={<Press />} />
        <Route path='/get-inspired' element={<GetInspired />} />
        <Route path='/about' element={<About />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/play' element={<Play />} />
        <Route path='/leaderboard' element={<h1 className='mt-5 pt-5'>Under construction</h1>} />
        <Route path='/support' element={<h1 className='mt-5 pt-5'>Under construction</h1>} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='*' element={<>404 - Not found</>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
