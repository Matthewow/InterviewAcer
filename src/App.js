
import './App.css';
import SignInSide from './pages/SignInSide';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import Test from './Test';
import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UploadPage from './pages/UploadPage';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import MyPostPage from './pages/MyPostPage';

// https://www.youtube.com/watch?v=aTPkos3LKi8&ab_channel=LamaDev

function App() {


  const attributes = {
    serverIP: "http://120.77.98.16:8080/"
  };

  const token = useContext("");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/signin" element={<SignInSide />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/question_upload" element={<UploadPage />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/mypost" element={<MyPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
