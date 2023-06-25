import "./App.css";
import { Route, Routes } from "react-router-dom";
import Feedback from "./components/Feedback";
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Loggedinin from "./components/Loggedinin";
import Product from "./components/Product";
import Filter from "./components/Filter";
import Comment from "./components/Comments"
import GetComment from "./components/GetComment";
import LoginC from "./components/LoginC";
import Showcomment from "./components/Showcomment";
import Secondpage from "./components/Secondpage";
import Productadd from "./components/Productadd";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feedback />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Loggedinin" element={<Loggedinin />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/GetComment" element={<GetComment />} />
        <Route path="/LoginC" element={<LoginC />} />
        <Route path="/Showcomment" element={<Showcomment />} />
        <Route path="/Secondpage" element={<Secondpage/>} />
        <Route path="/Productadd" element={<Productadd/>} />
    
       
      </Routes>
  
    </>
  );
}

export default App;
