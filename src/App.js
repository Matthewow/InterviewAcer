
import './App.css';
import SignInSide from './pages/SignInSide';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import {useState,useEffect } from 'react';
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
import SingleInterviewPage from './pages/SingleInterviewPage';
import MyCollectionPage from './pages/MyCollectionPage';


function App() {
  
  var t = sessionStorage.getItem("t");
  const [token, setToken] = useState('');
  const [personalInfo, setPersonalInfo] = useState();

  useEffect(() => {
    if (t !== null)
      setToken(t)
  }, []);

  useEffect(() => {
    sessionStorage.setItem("t", token);
    console.log(token, t)
  }, [token]);


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DashBoard token = {token} setToken = {setToken}/>} />
        <Route exact path="/signin" element={<SignInSide token = {token} setToken = {setToken} setPersonalInfo = {setPersonalInfo}/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/question_upload" element={<QuestionUploadPage token = {token} setToken = {setToken}/>} />
        <Route exact path="/interview_upload" element={<InterviewUploadPage token = {token} setToken = {setToken}/>} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/profile" element={<Profile token = {token} setToken = {setToken} personalInfo = {personalInfo}/>} />
        <Route exact path="/mypost" element={<MyPostPage token = {token} setToken = {setToken}/>} />
        <Route exact path="/mycollection" element={<MyCollectionPage token = {token} setToken = {setToken}/>} />
        <Route exact path="/programming_question" element={<ProgrammingQuestionPage token = {token} setToken = {setToken}/>} />
        <Route exact path="/single_interview" element={<SingleInterviewPage token = {token} setToken = {setToken}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
