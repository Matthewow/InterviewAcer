
import './App.css';
import SignInSide from './SignInSide';
import Register from './Register';
import DashBoard from './DashBoard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// https://www.youtube.com/watch?v=aTPkos3LKi8&ab_channel=LamaDev

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/signin" element={<SignInSide />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
