import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home'
import Form from './Form'
import Table from './Table'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';


function App() {


  return (
    
    <div className="App">
              <Navbar />

 <Login/>

    
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/table" element={<Table />} />

        </Routes>
      

     
    </div>
    
  );
}

export default App;
