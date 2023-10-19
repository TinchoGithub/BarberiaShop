
import './assets/css/style.css'
import { BrowserRouter } from 'react-router-dom';
import Public from './Routes/Public';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
      <Header/>
      <Public/>
      <Footer/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
