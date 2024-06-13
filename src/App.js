
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Add from './components/Add';
import Search from './components/Search';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/view' element={<View/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
