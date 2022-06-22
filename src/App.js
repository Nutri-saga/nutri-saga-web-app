import React, { Suspense, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const Login = React.lazy(()=>import('./Components/Login'))
const Signup = React.lazy(()=>import('./Components/Signup'))
const Dashboard = React.lazy(()=>import('./Components/Dashboard'))

function App() {
  const {user} = useContext(AuthContext)
  return (
   <Suspense fallback={<div>Loading...</div>}>
        <Router>
          {!user ?
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
          </Routes>
          :
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/*' element={<Navigate to='/dashboard'/>}/>

          </Routes>
        }
      
        </Router>
   </Suspense>
  );
}

export default App;
