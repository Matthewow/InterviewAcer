
import './App.css';
import SignInSide from './pages/SignInSide';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import Test from './Test';
import { useContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import QuestionUploadPage from './pages/QuestionUploadPage';
import InterviewUploadPage from './pages/InterviewUploadPage';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import MyPostPage from './pages/MyPostPage';
import ProgrammingQuestionPage from './pages/ProgrammingQuestionPage';


// https://www.youtube.com/watch?v=aTPkos3LKi8&ab_channel=LamaDev

function App() {

  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/signin" element={<SignInSide />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/question_upload" element={<QuestionUploadPage />} />
        <Route exact path="/interview_upload" element={<InterviewUploadPage />} />
        <Route exact path="/test" element={<Test token = {token}/>} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/mypost" element={<MyPostPage />} />
        <Route exact path="/programming_question" element={<ProgrammingQuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
