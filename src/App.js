import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import {Routes,Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Slider from './components/Slider';
import data from './data/data';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import Footer from './components/Footer';
import NavOption from './components/NavOption';

function App() {
  return (
    <Router>
      <div className="app__conatiner">        
        <Navbar />
        <PreNavbar />
        <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>
        <Slider key={data.banner.start} start={data.banner.start} />
        <StarProduct />        
        <HotAccessoriesMenu /> 
        <Routes>
          <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
          <Route exact path='/device' element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />} />
          <Route exact path='/home' element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />} />
          <Route exact path='/lifestyle' element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />} />
          <Route exact path='/accessories' element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>        
       <Footer footer={data.footer} />
      </div>
    </Router>
  );
}

export default App;
