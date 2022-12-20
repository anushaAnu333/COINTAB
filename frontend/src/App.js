
import './App.css';
import {Routes, Route} from "react-router-dom"
import DetailPage from './components/DetailPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Routes>
      <Route path="/userdetail" element={ <DetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
