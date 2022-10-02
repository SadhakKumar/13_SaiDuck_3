import './App.css';
import Details from './Pages/Details';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<HomePage/>}/>
        <Route exact path = 'hivtest' element = {<Details/>}/>
        
      </Routes>
      
    </BrowserRouter>
      
    </>
  );
}

export default App;
