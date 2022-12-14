
import './App.css';
import Home from './Pages/Home/Home/Home';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Appointment from './Pages/Appoinments/Appoinment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthPorvider from './Hooks/AuthProvider';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (

    <AuthPorvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/appoinment" element={}></Route> */}
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route element={<PrivetRoute>
            
          </PrivetRoute>}>
            <Route path="/appoinment" element={<Appointment></Appointment>}></Route>
            <Route path="/dashboard/*" element={<DashBoard></DashBoard>}>

            </Route>
          </Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>



        </Routes>
      </BrowserRouter>
    </AuthPorvider>

  );
}

export default App;
