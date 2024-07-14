import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

const AppRoutes = () => (
    <Routes>
      <Route path='/dashboard' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />
    </Routes>
);

const App = () => {
  return (
    <Router>
    <div>
        <AppRoutes />
      <Link to='/signup' className='font-medium text-primary underline'>Sign Up</Link>
        <Link to='/login' className='font-medium text-primary underline'>Login</Link>
        <Link to='/dashboard' className='font-medium text-primary underline'>Dashboard</Link>
    </div>
    </Router>
  );
}

export default App;
