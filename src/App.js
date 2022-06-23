
import './App.css';
import SignInSide from './SignInSide';
import Register from './Register';
import DashBoard from './DashBoard';
import Test from './Test';
import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UploadPage from './components/UploadPage';
import Info from './components/Info';

// https://www.youtube.com/watch?v=aTPkos3LKi8&ab_channel=LamaDev

function App() {


  const attributes = {
    serverIP: "http://120.77.98.16:8080/"
  };

  const jwtToken = useContext("");


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/signin" element={<SignInSide />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/upload" element={<UploadPage />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/info" element={<Info />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
