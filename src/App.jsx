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
import Support from './Components/Support/index.jsx'
import Privacy from './Components/PrivacyPolicy'
import TermsOfService from './Components/TermOfService'
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
        {/* <Route path='/subscribe' element={<Subscribe />} /> */}
        <Route path='/play' element={<Play />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/support' element={<Support />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='*' element={<h1 style={{marginTop: "8rem", display: "flex", justifyContent: "center"}}>404 - Not found</h1>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
