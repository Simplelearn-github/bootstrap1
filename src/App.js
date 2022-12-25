import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { Registration } from './Registration';
import { Mapping } from './Mapping';






function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path='' element= { <Home/>}/>
        <Route path='/Registration' element={<Registration/>}/>
    <Route   path='/Mapping' element={<Mapping/>}/>
   

      </Routes>
      </BrowserRouter>
     
     
  
    </div>
  );
}

export default App;
