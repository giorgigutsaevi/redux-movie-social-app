import {Routes, Route, useLocation} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';

function App() {
  const {pathname} = useLocation();

  return (
    <div>
      
      {pathname !== "/accounts/register" && <Navbar/>}
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route path='/accounts/register' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
