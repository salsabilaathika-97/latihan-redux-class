import './App.css';
import Home from './Page/Home';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Register from './Page/Register';
import Login from './Page/Login';
import LoginClass from './Page/LoginClass';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/login-class" element={<LoginClass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
