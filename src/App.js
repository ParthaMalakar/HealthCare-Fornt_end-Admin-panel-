import logo from './logo.svg';
import './App.css';
import Doctors from './components/Doctors';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appointment from './components/Appointment';
import Detail from './components/Detail';
import Home from './Home';
import BloodBank from './components/BloodBank';
import Ambulance from './components/ConfirmAmbulance';
import Register from './components/login/signup';
import Login from './components/login/login';
import MakeAppointment from './components/makeAppointment';
import Prescriptions from './components/Prescriptions';
import PresDetails from './components/PresDetails';
import Logout from './components/login/logout';
import Proflile from './components/proflile';
import BookedAmbulances from './components/bookedAmbulance';
import Notice from './components/noticeadd';
import Paitent from './components/Patient';
import Unblock from './components/UnblockPatient';
import Download from './components/Download';
import AvaiableAmbulances from './components/AvailableAmbulance';
import Doctor from './components/AvaiableDoctors';
import Blood from './components/Blood';
import Donar from './components/Donar';
import Collected from './components/Collected_Donar';
import Verify from './components/Verify';
import Confirmmail from './components/Confirmmail';
function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/bloodbanks' element={<BloodBank/>} />
        <Route path='/ambulances' element={<Ambulance/>} />
        <Route path='/prescriptions/:pid' element={<Prescriptions/>} />
        <Route path='/details/:id' element={<Detail/>} />
        <Route path='/bookappointment/:id' element={<MakeAppointment/>} />
        <Route path='/prescription/details/:id' element={<PresDetails/>} />
        <Route path='/appointments/:pid' element={<Appointment/>} />
        <Route path='/ambulances/booked' element={<BookedAmbulances/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='profile' element={<Proflile/>} />
        <Route path='notice' element={<Notice/>} />
        <Route path='patient' element={<Paitent/>} />
        <Route path='/unblock' element={<Unblock/>} />
        <Route path='download' element={<Download/>} />
        <Route path='/availablepat/:id' element={<AvaiableAmbulances/>} />
        <Route path='/availabledoc/:id' element={<Doctor/>} />
        <Route path='/blood/' element={<Blood/>} />
        <Route path='/donar/:id' element={<Donar/>} />
        <Route path='/collected/' element={<Collected/>} />
        <Route path='/verify/' element={<Verify/>} />
        <Route path='/confirmmail/' element={<Confirmmail/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );


}


export default App;
