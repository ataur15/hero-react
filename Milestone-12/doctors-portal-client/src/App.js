import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';




function App() {
   return (
      <div>
         <AuthProvider>
            <Router>
               <Navigation></Navigation>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/appointment" element={
                     <PrivateRoute>
                        <Appointment />
                     </PrivateRoute>}>
                  </Route>
                  <Route path="/dashboard" element={
                     <PrivateRoute>
                        <Dashboard />
                     </PrivateRoute>}>

                     <Route path="home" element={<DashboardHome />} />

                     <Route path="makeadmin" element={
                        <AdminRoute>
                           <MakeAdmin />
                        </AdminRoute>}
                     />
                     <Route path="adddoctor" element={
                        <AdminRoute>
                           <AddDoctor />
                        </AdminRoute>}
                     />
                     <Route path="payment/:appointmentId" element={
                        <Payment></Payment>}
                     />
                  </Route>
                  <Route path="/login" element={<Login />} ></Route>
                  <Route path="/register" element={<Register />} ></Route>
               </Routes>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
