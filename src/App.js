import Templet1 from './Components/Templet1'
import './App.css';

const App = ()=>{
  return (
 <div>
 
  <div className='home'>
  
    <div className='animated-para'>
       <p className='typing'>Wow! invitation within seconds? Yes</p>
    </div>
     <Templet1/>
  </div>
  <nav>
    <img alt='logo' src='https://res.cloudinary.com/dkredoejm/image/upload/v1704625487/celbrare_ygr97d.png' className='image'/>
    <h1 className='celebrate'>Celebrare</h1>
  </nav>
  
 </div>
  )
}

export default App;
