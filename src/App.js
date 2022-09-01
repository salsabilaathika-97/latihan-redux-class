import './App.css';
import Home from './Page/Home';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Register from './Page/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/register" element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
