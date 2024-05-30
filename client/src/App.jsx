
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'
import NotFound from './components/404/NotFound';
import FakeUsers from './components/fakeusers/FakeUsers';
function App() {

  return (
    <>
     <Router>
      
        <Routes>
          <Route index path="/"  element={<Login />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/signup" element={<Signup />} />
          <Route index path="/forgot-password" element={<ForgotPassword />} />
          <Route index path="/fakeusers/:token" element={<FakeUsers />} />
          <Route index path="*" element={<NotFound />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
