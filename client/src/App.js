/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import CandyStore from './pages/snackList/SnackList';
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import axios from 'axios';
import { connect } from 'react-redux'
import { persistLoginRequest } from './store/user/actions';
import { parseJwt } from "./utils/parseJWT"

axios.defaults.withCredentials = true;

function App(props) {
  const { pathname } = useLocation();

  const findUser = async (id) => {
    props.dispatch(persistLoginRequest(id))
  }

  useEffect(() => {
    const token = document.cookie.split("token=").join("")
    if (token) {
      const userId = parseJwt(token)
      findUser(userId.user)
    }
  }, [])

  return (
    <div>
      {pathname !== "/accounts/register" && pathname !== "/accounts/login" && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/accounts/register' element={<Signup />} />
        <Route path='/accounts/login' element={<Login />} />
        <Route path='/candystore' element={<CandyStore />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(App);
